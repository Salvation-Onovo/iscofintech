import { Schema, model } from 'mongoose'

const adminSchema = new Schema({
    email: { type: String, required: ['Email is required']},
    password: { type: String, required: ['Password is required']}

}, { timestamps: true })

const Admin = model("Admin", adminSchema)
export default Admin