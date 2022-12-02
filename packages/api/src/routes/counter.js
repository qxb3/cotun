const Counties = require('../lib/models/counties')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/counter',
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
        required: ['name', 'type'],
        properties: {
          name: { type: 'string' },
          type: {
            type: 'string',
            enum: ['increment', 'decrement']
          }
        }
      }
    },
    handler: async (req, reply) => {
      const { name, type } = req.query

      const update = type === 'increment'
        ? { $inc: { count: 1 } }
        : { $inc: { count: -1 } }

      const countie = await Counties.findOneAndUpdate(
        { name },
        update,
        { new: true }
      )

      if (!countie)
        return reply.badRequest('there is no countie with that name')

      reply.send(countie)
    }
  })

  done()
}
