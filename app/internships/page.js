'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";

const InternshipFilters = () => {
  const [filters, setFilters] = useState({
    domain_profile: "",
    location: "",
    workFromHome: false,
    isPartTime: false,
    minStipend: "",
    maxStipend: "",
    duration: "",
    skills: "",
  });

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetchInternships();
  }, []);
  
  const fetchInternships = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/internships", {
        params: filters, // ✅ Sending filters as query parameters
      });
  
      console.log("Fetched Data:", response.data); // ✅ Debug in Console
      setInternships(response.data);
    } catch (error) {
      console.error("Error fetching internships:", error.response?.data || error);
    }
  };
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value, // ✅ Ensures boolean value
    });
  };
  

  return (
    <div className="flex">
      {/* Left Sidebar (Filters) */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        <label className="block">Profile Role</label>
        <input type="text" name="domain_profile" value={filters.domain_profile} onChange={handleChange} className="w-full p-2 mb-2 border" />

        <label className="block">Location</label>
        <input type="text" name="location" value={filters.location} onChange={handleChange} className="w-full p-2 mb-2 border" />

        <label className="block">
          <input type="checkbox" name="workFromHome"  checked={!!filters.workFromHome} onChange={handleChange} />
          Work From Home
        </label>

        <label className="block">
          <input type="checkbox" name="isPartTime" checked={filters.isPartTime} onChange={handleChange} />
          Part-Time
        </label>

        <label className="block">Minimum Stipend (₹)</label>
        <input type="number" name="minStipend" value={filters.minStipend} onChange={handleChange} className="w-full p-2 mb-2 border" />

        <label className="block">Maximum Stipend (₹)</label>
        <input type="number" name="maxStipend" value={filters.maxStipend} onChange={handleChange} className="w-full p-2 mb-2 border" />

        <label className="block">Duration</label>
        <input type="text" name="duration" value={filters.duration} onChange={handleChange} className="w-full p-2 mb-2 border" />

        <label className="block">Skills (comma-separated)</label>
        <input type="text" name="skills" value={filters.skills} onChange={handleChange} className="w-full p-2 mb-2 border" />

        <button onClick={fetchInternships} className="w-full bg-blue-500 text-white p-2 rounded-md mt-2">
          Apply Filters
        </button>
      </div>

      {/* Right Section (Internship List) */}
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-bold mb-4">Internships</h2>
        <div className="grid grid-cols-3 gap-4">
          {internships.length > 0 ? (
            internships.map((internship) => (
              <div key={internship._id} className="border p-4 rounded-lg shadow-md">
                <h3 className="font-bold">{internship.domain_profile}</h3>
                <p><strong>Company:</strong> {internship.company_name}</p>
                <p><strong>Location:</strong> {internship.location}</p>
                <p><strong>Stipend:</strong> ₹{internship.stipend}</p>
                <p><strong>Duration:</strong> {internship.duration}</p>
                <p><strong>Work From Home:</strong> {internship.location === "Work From Home" ? "Yes" : "No"}</p>
                <p><strong>Part-time:</strong> {internship.is_part_time ? "Yes" : "No"}</p>
                <p><strong>Skills:</strong> {internship.skills}</p>
              </div>
            ))
          ) : (
            <p>No internships found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipFilters;