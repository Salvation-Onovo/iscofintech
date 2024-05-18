const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const contactRoute = require('./routes/contact.routes')

const app = express()

// MIDDLEWARES
// They are functions (side-effects) that run before the main route functions are executed
app.use(cors({ origin: "*" }))
// app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/contact', contactRoute)


// CONNECT TO DB
const connectToDB = require("./config/database")
connectToDB(() => {
  // CREATE SEVER PORT
  const PORT = 5000
  app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))
})