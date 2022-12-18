const mongoose = require('mongoose')

const Types = mongoose.Types

const connectToDb = async (app) => {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.NODE_ENV === 'development' ? 'development' : 'production'
  })

  db.set('toJSON', {
    virtuals: true,
    transform: (_document, converted) => {
      delete converted._id
      delete converted.__v
    }
  })

  app.log.info('Connected to database')

  return db
}

const createSchema = (name, schema) => {
  return mongoose.model(name, new mongoose.Schema(schema))
}

module.exports = {
  Types,
  connectToDb,
  createSchema
}
