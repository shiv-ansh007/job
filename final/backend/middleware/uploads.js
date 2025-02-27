import multer from "multer";
import cloudinary from "../utils/cloudinary.js";

import { CloudinaryStorage } from "multer-storage-cloudinary";


// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user_profiles",
    allowedFormats: ["jpg", "png", "jpeg", "pdf"], // Allow images and PDFs
  },
});

const upload = multer({ storage });
export default upload;
