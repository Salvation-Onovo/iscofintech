import { Schema, model } from "mongoose";

// Define schema
const contactSchema = new Schema(
  {
    fullname: { type: String, required: [true, "Full name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    title: { type: String, required: [true, "Title is required"] },
    message: { type: String, required: [true, "Message is required"] },
  },
  { timestamps: true }
);

// Create model
const Contact = model("Contact", contactSchema);

// Function to create a new contact message
const create = async (name, email, subject, message) => {
  try {
    const newMessage = new Contact({
      fullname: name,
      email,
      title: subject,
      message,
    });

    const savedMessage = await newMessage.save();
    return savedMessage;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get all contacts
const getContacts = async () => {
    try {
        const contacts = await Contact.find();
        return contacts;
    } catch (error) {
        throw new Error(error.message);
    }
}

export { create, getContacts, Contact };
