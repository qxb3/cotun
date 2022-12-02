const Counties = require('../lib/models/counties')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/create',
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
    },
    handler: async (req, reply) => {
      const { name } = req.query

      const countie = await Counties.create({ name })
      reply.send(countie)
    }
  })

  done()
}
