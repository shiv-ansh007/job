import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";  // ✅ Ensure `.js` extension
import JobApplication from "./models/JobApplication.js";  // ✅ Ensure `.js` extension

dotenv.config();
const app = express();

app.use(cors()); // ✅ Allows frontend to communicate with backend
app.use(express.json()); // ✅ Allows JSON parsing
app.use(express.urlencoded({ extended: true })); // ✅ Allows form data parsing

// ✅ Connect to MongoDB
connectDB();

// ✅ Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Setup file storage for resumes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Saves files in 'uploads/' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Backend Route to Handle Form Submission
app.post("/apply", upload.single("resumeFile"), async (req, res) => {
  try {
    const { name, email, resumeLink, coverLetter } = req.body;
    const resumeFile = req.file ? req.file.filename : null;

    if (!name || !email || (!resumeLink && !resumeFile)) {
      return res.status(400).json({ message: "Missing required fields!" });
    }

    // ✅ Save Application to MongoDB
    const application = new JobApplication({
      name,
      email,
      resumeLink,
      coverLetter,
      resumeFile,
    });

    await application.save(); // ✅ Saves to MongoDB Atlas

    console.log("✅ Application received:", { name, email, resumeLink, coverLetter, resumeFile });
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
