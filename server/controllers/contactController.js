const contactModel = require("../models/contact.model")

exports.contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await contactModel.create({ name, email, subject, message })
    res.status(201).json({ contact });
  } catch (error) {
    res.status(500).json({ error })
  }
}

exports.getContacts = async (req, res) => {
  try {

    const contacts = await contactModel.find({})
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "No contacts found" })
  }
}