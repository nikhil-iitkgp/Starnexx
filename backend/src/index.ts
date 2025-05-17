// src/index.ts

import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db"
import contactRoutes from "./routes/contactRoutes" 

// Load environment variables
dotenv.config()

// Initialize Express App
const app = express()

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || []
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    } else {
      return callback(new Error('Not allowed by CORS'))
    }
  }
}))

// Middleware
app.use(express.json())

// Connect to MongoDB Atlas
connectDB()

// API Routes
app.use("/api/contact", contactRoutes)

app.get("/", (req, res) => {
  res.send("Hello Backend")
})

// Server Port
const PORT = process.env.PORT || 5000

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on port http://localhost:${PORT}`))
