module.exports = {
  $id: 'counter',
  type: 'object',
  properties: {
    account: { $ref: 'account' },
    name: { type: 'string' },
    count: { type: 'number' }
  }
}
