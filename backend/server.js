import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js"; // ✅ Ensure `.js` extension
import internshipsRoutes from "./routes/InternshipsRoutes.js"; // ✅ Correct import
import JobApplication from "./models/JobApplication.js"; // ✅ Ensure `.js` extension
import Internship from "./models/internshipModel.js"; // ✅ Import Internship model

dotenv.config();
const app = express();

// ✅ Connect to MongoDB with Error Handling
connectDB()
  .then(() => console.log("🚀 MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if DB fails
  });

// ✅ CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // ✅ Allow frontend requests
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ✅ Internship Routes
app.use("/api/internships", internshipsRoutes); // ✅ Updated route for clarity

// ✅ Sample Route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// ✅ Setup Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // ✅ Store files in "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // ✅ Unique filenames
  },
});

const upload = multer({ storage });

// ✅ Job Application Route
app.post("/api/apply", upload.single("resumeFile"), async (req, res) => {
  try {
    const { name, email, resumeLink, coverLetter } = req.body;
    const resumeFile = req.file ? req.file.filename : null;

    if (!name || !email || (!resumeLink && !resumeFile)) {
      return res.status(400).json({ message: "❌ Missing required fields!" });
    }

    const application = new JobApplication({
      name,
      email,
      resumeLink,
      coverLetter,
      resumeFile,
    });

    await application.save();
    console.log("✅ Application received:", { name, email, resumeLink, coverLetter, resumeFile });

    res.status(201).json({ message: "✅ Application submitted successfully!" });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ message: "❌ Internal Server Error" });
  }
});

// ✅ Handle 404 Errors
app.use((req, res) => {
  res.status(404).json({ message: "❌ API Route Not Found" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
