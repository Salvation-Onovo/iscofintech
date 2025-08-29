import { create, getContacts } from "../models/contact.model.js";

export async function contactUs(req, res) {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await create(name, email, subject, message)
    res.status(201).json({ contact });
    console.log('Succesful')
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error })
  }
}

export async function getTheContacts(req, res) {
  try {

    const contacts = await getContacts();
    console.log('All contacts: ', contacts);
    
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "No contacts found" })
  }
}