import express from "express";
import Internship from "../models/internshipModel.js";

const router = express.Router();

// ✅ GET internships with filters
router.get("/", async (req, res) => {
  try {
    let query = {};

    if (req.query.domain_profile) {
      query.domain_profile = { $regex: req.query.domain_profile, $options: "i" };
    }
    if (req.query.location) {
      query.location = { $regex: req.query.location, $options: "i" };
    }
    if (req.query.workFromHome) {
      query.workFromHome = req.query.workFromHome === "true";
    }
    if (req.query.isPartTime) {
      query.isPartTime = req.query.isPartTime === "true";
    }
    if (req.query.minStipend || req.query.maxStipend) {
      query.$and = [];
      if (req.query.minStipend) query.$and.push({ stipend: { $gte: parseInt(req.query.minStipend) } });
      if (req.query.maxStipend) query.$and.push({ stipend: { $lte: parseInt(req.query.maxStipend) } });
    }
    if (req.query.duration) {
      query.duration = { $regex: req.query.duration, $options: "i" }; // ✅ Matches "5 Months" and "5"
    }
    if (req.query.skills) {
      const skillsArray = req.query.skills.split(",").map(skill => skill.trim());
      query.skills = { $in: skillsArray }; // ✅ Matches updated array format
    }

    console.log("Final Query:", JSON.stringify(query, null, 2)); // ✅ Debugging log

    const internships = await Internship.find(query);
    res.json(internships);
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
