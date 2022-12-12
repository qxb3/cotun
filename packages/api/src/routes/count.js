module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/count',
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
          name: { type: 'string', minLength: 3 },
          type: {
            type: 'string',
            enum: ['inc', 'dec']
          }
        }
      },
      response: {
        200: { $ref: 'counter' }
      }
    },
    preHandler: (req, reply, done) => app.validatedApiKey(req, reply, done),
    handler: async (req, reply) => {
      const { user } = req
      // const { name, type } = req.query
      console.log(user)

    }
  })

  done()
}
