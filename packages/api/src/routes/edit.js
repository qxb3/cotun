const Counters = require('#models/counters.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/edit',
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
          name: { type: 'string', minLength: 3 }
        }
      },
      body: {
        type: 'object',
        required: ['newName'],
        properties: {
          newName: { type: 'string', minLength: 3 },
          newCount: { type: 'integer' }
        }
      }
      // response: {
      //   200: {
      //     $ref: 'counter',
      //     edited: { tyoe: 'boolean' }
      //   }
      // }
    },
    preHandler: (req, reply, done) => app.auth.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      const { name } = req.query
      const { newName, newCount } = req.body
      const { user } = req

      try {
        const _count = newCount ? { count: newCount } : {}
        const editedCounter = await Counters.findOneAndUpdate(
          {
            userId: user._id,
            name: name
          },
          {
            name: newName,
            ..._count
          },
          {
            new: true
          }
        )

        if (!editedCounter) {
          return reply.badRequest(`There is no counter called ${name}`)
        }

        reply.send({
          name: editedCounter.name,
          count: editedCounter.count,
          edited: true
        })
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
