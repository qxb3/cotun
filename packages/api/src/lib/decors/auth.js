const Users = require('#models/users.js')

const validatedApiKey = (req, reply, done) => {
  const { authorization } = req.headers
  const { token } = req.cookies

  console.log(req.cookies)

  Users.findOne({ apiKey: authorization || token })
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
