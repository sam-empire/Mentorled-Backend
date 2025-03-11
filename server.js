const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auths");

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS
app.use("/auths", authRoutes); // Use auth routes

app.get("/", (req, res) => {
  res.send("MentorLed Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// end
