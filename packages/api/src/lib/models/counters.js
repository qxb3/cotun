const { createSchema, ObjectId } = require('#utils/db.js')

module.exports = createSchema('counters', {
  account: {
    type: ObjectId,
    ref: 'accounts',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  count: {
    type: String,
    required: true
  }
})
