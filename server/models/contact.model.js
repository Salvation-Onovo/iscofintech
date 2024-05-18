const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['Full name is required']
  },

  email: {
    type: String,
    required: ['Enter email']
  },

  subject: {
    type: String,
  },

  message: {
    type: String,
    required: ['Message cannot be empty ']
  }
}, { timestamps: true })

const contactModel = mongoose.model("Contact", contactSchema)
module.exports = contactModel