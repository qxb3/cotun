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
      }
    },
    handler: async (req, reply) => {
      const { username, password } = req.body

      try {
        const user = await Users.findOne({ username, password })
        if (!user) {
          return reply.unauthorized('Invalid username or password')
        }

        reply.send(user)
      } catch(err) {
        app.errors.response(app, reply, err)
      }
    }
  })

  done()
}
