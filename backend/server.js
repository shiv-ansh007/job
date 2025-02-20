const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// File filter to allow only PDFs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// Multer upload configuration
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// API Endpoint for Job Applications
app.post("/api/apply", upload.single("resume"), (req, res) => {
  try {
    const { jobTitle, fullName, email, availability } = req.body;
    const resumePath = req.file ? req.file.path : null;

    if (!jobTitle || !fullName || !email || !resumePath) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    console.log("New Application Submitted:", {
      jobTitle,
      fullName,
      email,
      availability,
      resumePath
    });

    res.status(200).json({
      success: true,
      message: "Application submitted successfully!",
      resumeURL: `/uploads/${path.basename(resumePath)}` // Send resume link
    });

  } catch (error) {
    console.error("Error handling application:", error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
});

// Serve uploaded files
app.use("/uploads", express.static(uploadDir));

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
