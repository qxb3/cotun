const Users = require('#models/users.js')

const validatedApiKey = async (req, reply, done) => {
  const { authorization } = req.headers

  const user = await Users.findOne({ apiToken: authorization })
  if (!user) {
    return reply.unauthorized('Invalid api key')
  }

  req.user = user
  done()
}

module.exports = {
  validatedApiKey
}
