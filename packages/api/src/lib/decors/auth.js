const Users = require('#models/users.js')

const validatedApiKey = (req, reply, done) => {
  const { authorization } = req.headers
  const { apiKey } = req.cookies

  Users.findOne({ apiKey: authorization || apiKey })
    .then(user => {
      if (!user) {
        return reply.unauthorized('Invalid api key')
      }

      req.user = user
      done()
    })
}

module.exports = {
  validatedApiKey
}
