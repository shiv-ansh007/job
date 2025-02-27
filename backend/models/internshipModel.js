import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  domain_profile: String,
  company_name: String,
  location: String,
  workFromHome: Boolean,
  isPartTime: Boolean,
  stipend: Number,
  duration: String,
  startDate: String,
  skills: [String], // ✅ Store skills as an array
});

const Internship = mongoose.model("Internship", internshipSchema);
export default Internship;
