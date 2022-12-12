const { createSchema } = require('#utils/db.js')

module.exports = createSchema('users', {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  counters: [
    {
      name: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    }
  ]
})
