const Users = require('#models/users.js')

const validatedApiKey = (req, reply, done) => {
  const { authorization } = req.headers

  Users.findOne({ apiToken: authorization })
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
