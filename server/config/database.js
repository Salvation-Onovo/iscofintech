const mongoose = require('mongoose')

// localhost -> 127.0.0.1
const connectToDB = async (cb) => {
  try {
    await mongoose.connect("mongodb+srv://salvmichael202:fushiguro@iscofintech.b51zlpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log('Connected to database')
    cb?.()
  } catch (error) {
    console.error("ERROR:", error.message)
  }
}

module.exports = connectToDB