const Counters = require('#models/counters.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'GET',
    path: '/get',
    schema: {
      params: {
        type: 'object',
        properties: {
          name: { type: 'string', minLength: 3 }
        }
      }
      // response: {
      //   200: {
      //     type: ['object', 'array'],
      //     enum: [
      //       { $ref: 'counter' },
      //       { items: { $ref: 'counter' } }
      //     ]
      //   }
      // }
    },
    preHandler: (req, reply, done) => app.auth.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      const { name } = req.query

      try {
        if (name) {
          await getSingle(req, reply)
        } else {
          await getAll(req, reply)
        }
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  async function getSingle(req, reply) {
    const { name } = req.query
    const { user } = req

    const counter = await Counters.findOne({
      userId: user._id,
      name
    })

    if (!counter) {
      reply.badRequest(`There is no counter called ${name}`)
    }

    // TODO: Fix this after i figure out the schema thingy
    reply.send({
      name: counter.name,
      count: counter.count
    })
  }

  async function getAll(req, reply) {
    const { user } = req

    const counters = await Counters.find({ userId: user._id })

    // TODO: Fix this after i figure out the schema thingy
    const filteredCounters = counters.map(v => ({
      name: v.name,
      count: v.count
    }))

    reply.send(filteredCounters)
  }

  done()
}
