const Counters = require('#models/counters.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/create',
    schema: {
      headers: {
        type: 'object',
        properties: {
          Authorization: { type: 'string' }
        }
      },
      query: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', minLength: 3 },
          count: { type: 'integer' }
        }
      },
      response: {
        200: { $ref: 'counter' }
      }
    },
    preHandler: (req, reply, done) => app.auth.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      const { name, count = 0 } = req.query
      const { user } = req

      try {
        const existingCounter = await Counters.findOne({
          userId: user._id,
          name
        })

        if (existingCounter) {
          return reply.badRequest(`There is already a counter called ${name}`)
        }

        const counter = await Counters.create({
          userId: user._id,
          name,
          count
        })

        reply.send(counter)
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
