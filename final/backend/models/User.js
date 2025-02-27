import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String, default: "" }, // Store image URL
  resume: { type: String, default: "" } // Store resume URL
});

export default mongoose.model("User", UserSchema);
