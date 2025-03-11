const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = []; // Temporary in-memory storage (replace with DB later)

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
});

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

module.exports = router;
