import dotenv from "dotenv"
dotenv.config()

import bcrypt from "bcrypt"
import cors from "cors"
import crypto from "crypto"
import express from "express"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/test-auth"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
})

const User = model("User", userSchema)

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization")?.replace("Bearer ", "")
  const user = await User.findOne({ accessToken })

  if (user) {
    req.user = user
    next()
  } else {
    res.status(401).json({
      loggedOut: true,
      message: "Not authorized"
    })
  }
}

const port = process.env.PORT || 8080
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Test route
app.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

// Register user
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required"
      })
    }

    const salt = bcrypt.genSaltSync()
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = new User({
      name,
      email,
      password: hashedPassword
    })

    const savedUser = await user.save()

    res.status(201).json({
      success: true,
      message: "User created",
      id: savedUser._id,
      accessToken: savedUser.accessToken
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not create user",
      errors: error
    })
  }
})

// Login user
app.post("/sessions", async (req, res) => {

  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        message: "Login successful",
        userId: user._id,
        accessToken: user.accessToken,
        user: { name: user.name, email: user.email }
      })
    } else {
      res.status(401).json({
        success: false,
        message: "Felaktig e-post eller lösenord"
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Serverfel vid inloggningen",
      error: error.message
    })
  }
})


// Protected route example
app.get("/secrets", authenticateUser, (req, res) => {
  res.json({
    secret: "This is secret",
    user: req.user.name
  })
})

//Logged in site    
    app.get("/profile", authenticateUser, (req, res) => {
      res.json({
        success: true,
        name: req.user.name,
        email: req.user.email
      })
    })

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

