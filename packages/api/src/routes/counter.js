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
        required: ['type'],
        properties: {
          type: { type: 'string' }
        }
      }
    },
    handler: (req, reply) => {
      const { headers, query } = req

      reply.send({ headers, query })
    }
  })

  done()
}
