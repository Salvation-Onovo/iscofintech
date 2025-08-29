import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";

// Create new admin
export async function createAdmin(req, res) {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
      email,
      password: hashedPassword
    }

    // Password will be hashed automatically by pre-save hook
    const admin = new Admin(data);
    await admin.save();

    res.status(201).json({ admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Admin login
export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    console.log('Details: ', req.body);
    
    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.log('Incorrect email');
      return res.status(404).json({ message: "Invalid credentials" });
    }
    console.log('password: ', admin);
    
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log('Incorrect password');
      
      return res.status(404).json({ message: "Invalid credentials" });
    }

    console.log('Login successful');
    
    res.status(200).json({ message: "Login successful", email: admin.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}







