const { createSchema } = require('#utils/db.js')
const { randomBytes } = require('crypto')

module.exports = createSchema('users', {
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  apiKey: {
    type: String,
    default: randomBytes(42).toString('base64url'),
    unique: true
  }
})
