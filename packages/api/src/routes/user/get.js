module.exports = (app, _options, done) => {
  app.route({
    method: 'GET',
    path: '/get',
    schema: {
      headers: {
        type: 'object',
        required: ['Authorization'],
        properties: {
          Authorization: { type: 'string' }
        }
      },
      response: {
        200: { $ref: 'user' }
      }
    },
    preHandler: (req, reply, done) => app.auth.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      reply.send(req.user)
    }
  })

  done()
}
