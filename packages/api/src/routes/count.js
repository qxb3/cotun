const Counters = require('#models/counters.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/count',
    schema: {
      headers: {
        type: 'object',
        properties: {
          Authorization: { type: 'string' }
        }
      },
      query: {
        type: 'object',
        required: ['name', 'type'],
        properties: {
          name: { type: 'string' },
          type: {
            type: 'string',
            enum: ['increment', 'decrement']
          }
        }
      },
      response: {
        200: { $ref: 'counter' }
      }
    },
    preHandler: (req, reply, done) => app.auth.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      const { name, type } = req.query
      const { user } = req

      try {
        const counter = await Counters.findOneAndUpdate(
          {
            userId: user._id,
            name
          },
          {
            $inc: {
              count: type === 'increment' ? 1 : -1
            }
          },
          {
            new: true
          }
        )

        if (!counter) {
          reply.badRequest(`There is no counter called ${name}`)
        }

        reply.send(counter)
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
