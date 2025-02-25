const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json"); // Ensure this file is correct

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "jobs-mentorship.firebasestorage.app", // 🔴 Make sure this is your actual bucket name
});

// Initialize Google Cloud Storage
const storage = new Storage();
const bucket = storage.bucket("jobs-mentorship.firebasestorage.app"); // 🔴 Update if needed

// CORS configuration
const corsConfig = [
  {
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "PUT", "DELETE"],
    maxAgeSeconds: 3600,
    responseHeader: ["Content-Type", "Authorization"],
  },
];

// Function to set CORS policy
async function setCorsPolicy() {
  try {
    await bucket.setCorsConfiguration(corsConfig);
    console.log("✅ CORS settings applied successfully!");
  } catch (error) {
    console.error("❌ Error setting CORS:", error);
  }
}

setCorsPolicy();
