import express, { json, urlencoded } from "express";

import cors from "cors";
// import morgan from "morgan";
import contactRoute from "./routes/contact_routes.js";
import adminRoute from "./routes/admin_routes.js";

const app = express()

// MIDDLEWARES
// They are functions (side-effects) that run before the main route functions are executed
app.use(cors({ origin: "*" }))
// app.use(morgan("dev"))

app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/contact', contactRoute)
app.use('/api/v1/admin', adminRoute)


// CONNECT TO DB
import connectToDB from "./config/database.js";
connectToDB(() => {
  console.log('Database connected successfully');  
});

// CREATE SEVER PORT
const PORT = 5000
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))
