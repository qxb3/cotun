const Counters = require('#models/counters.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/remove',
    schema: {
      headers: {
        type: 'object',
        required: ['Authorization'],
        properties: {
          Authorization: { type: 'string' }
        }
      },
      query: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', minLength: 3 }
        }
      }
      // response: {
      //   200: {
      //     type: 'object',
      //     $ref: 'counter',
      //     deleted: { type: 'boolean' }
      //   }
      // }
    },
    preHandler: (req, reply, done) => app.auth.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      const { name } = req.query
      const { user } = req

      try {
        const counter = await Counters.findOneAndDelete({
          userId: user._id,
          name
        })

        if (!counter) {
          reply.badRequest(`Ther is no counter called ${name}`)
        }

        reply.send({
          name: counter.name,
          count: counter.count,
          deleter: true
        })
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
