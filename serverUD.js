const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors"); // Corrected `cors`
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3600; // Use PORT from environment or default to 3600

// Middleware
app.use(cors()); // Use CORS to handle cross-origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema and Model
const formSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  designation: { type: String, required: true },
  current: { type: Array, default: [] },
  bio: { type: String, required: true },
  education: { type: Array, default: [] },
  researchAreas: { type: Array, default: [] },
  socialLinks: {
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
  },
});

const FormData = mongoose.model("FormData", formSchema);

// Routes
app.post("/submit", async (req, res) => {
  try {
    const data = req.body;

    // Save data to MongoDB
    const formData = new FormData(data);
    await formData.save();

    res.status(200).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to save data" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
