const { createSchema, ObjectId } = require('#utils/db.js')
const { randomId } = require('#utils/others.js')

module.exports = createSchema('accounts', {
  apiToken: {
    type: String,
    unique: true,
    default: randomId(24)
  },
  counters: [
    {
      type: ObjectId,
      ref: 'counters'
    }
  ]
})
