const Users = require('#models/users.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/register',
    schema: {
      body: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: {
            type: 'string',
            minLength: 3,
            maxLength: 12
          },
          password: {
            type: 'string',
            minLength: 8,
            maxLength: 32
          }
        }
      },
      response: {
        200: { $ref: 'user' }
      }
    },
    handler: async (req, reply) => {
      const { username, password } = req.body

      try {
        const user = await Users.create({
          username,
          password
        })

        reply.send(user)
      } catch(err) {
        if (/duplicate key error collection/.test(err.message)) {
          reply.badRequest('Username already exist')
        }

        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
