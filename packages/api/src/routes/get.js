const Counters = require('#models/counters.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'GET',
    path: '/get',
    schema: {
      headers: {
        type: 'object',
        properties: {
          Authorization: { type: 'string' }
        }
      },
      params: {
        type: 'object',
        properties: {
          name: { type: 'string', minLength: 3 }
        }
      },
      response: {
        200: {
          anyOf: [
            { $ref: 'counter' },
            {
              type: 'array',
              items: { $ref: 'counter' }
            }
          ]
        }
      }
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

    reply.send(counter)
  }

  async function getAll(req, reply) {
    const { user } = req

    const counters = await Counters.find({ userId: user._id })
    reply.send(counters)
  }

  done()
}
