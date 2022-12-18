const Users = require('#models/users.js')

module.exports = (app, _options, done) => {
  app.route({
    method: 'POST',
    path: '/login',
    schema: {
      body: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: { type: 'string' },
          password: { type: 'string' }
        }
      },
      response: {
        200: { $ref: 'user' }
      }
    },
    handler: async (req, reply) => {
      const { username, password } = req.body

      try {
        const user = await Users.findOne({ username, password })
        if (!user) {
          return reply.unauthorized('Invalid username or password')
        }

        reply.setCookie('token', user.apiKey, {
          domain: process.env.CLIENT_URL,
          path: '/',
          secure: true,
          httpOnly: true,
          sameSite: true
        })

        reply.setCookie('username', user.username)

        reply.send(user)
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
