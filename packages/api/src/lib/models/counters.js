const { createSchema, Types } = require('#utils/db.js')

module.exports = createSchema('counters', {
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})
