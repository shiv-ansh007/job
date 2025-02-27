import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import { Readable } from "stream";
import User from "../models/User.js"; // Import User model

const router = express.Router();

// ✅ Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Multer Storage (Memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Convert Buffer to Stream & Upload
const uploadToCloudinary = async (fileBuffer, folder, resourceType = "auto") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder, resource_type: resourceType },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    );
    Readable.from(fileBuffer).pipe(stream);
  });
};

// ✅ Route: Create or Update Profile
router.post("/", upload.fields([{ name: "profileImage" }, { name: "resume" }]), async (req, res) => {
  try {
    const { name, email } = req.body;
    let profileImageUrl = "";
    let resumeUrl = "";

    // ✅ Upload profile image to Cloudinary (if provided)
    if (req.files["profileImage"]) {
      const imageUpload = await uploadToCloudinary(req.files["profileImage"][0].buffer, "user_profiles");
      profileImageUrl = imageUpload;
    }

    // ✅ Upload resume to Cloudinary (if provided)
    if (req.files["resume"]) {
      const resumeUpload = await uploadToCloudinary(req.files["resume"][0].buffer, "user_resumes", "raw");
      resumeUrl = resumeUpload;
    }

    // ✅ Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // ✅ If user does NOT exist, create a new one
      user = new User({
        name,
        email,
        profileImage: profileImageUrl,
        resume: resumeUrl,
      });
    } else {
      // ✅ If user exists, update their profile
      user.name = name;
      user.profileImage = profileImageUrl || user.profileImage;
      user.resume = resumeUrl || user.resume;
    }

    await user.save();
    res.json(user);
  } catch (error) {
    console.error("Profile update failed:", error);
    res.status(500).json({ message: "Profile update failed" });
  }
});

// ✅ Route: Get User Profile by ID
router.get("/profile/:id", async (req, res) => {
  const { id } = req.params;

  // ✅ Check if ID is valid
  if (!id || id.length !== 24) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
