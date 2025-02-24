 "use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MyApplication() {
  const searchParams = useSearchParams();

  const internship = {
    title: decodeURIComponent(searchParams.get("title") || "N/A"),
    company: decodeURIComponent(searchParams.get("company") || "N/A"),
    location: decodeURIComponent(searchParams.get("location") || "N/A"),
    start_date: decodeURIComponent(searchParams.get("start_date") || "N/A"),
    duration: decodeURIComponent(searchParams.get("duration") || "N/A"),
    stipend: decodeURIComponent(searchParams.get("stipend") || "N/A"),
  };

  const [resume, setResume] = useState(null);

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!resume) {
      alert("Please upload your resume before applying.");
      return;
    }
    alert(`Resume for ${internship.title} at ${internship.company} submitted successfully!`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">{internship.title}</h1>
      <p><strong>Company:</strong> {internship.company}</p>
      <p><strong>Location:</strong> {internship.location}</p>
      <p><strong>Start Date:</strong> {internship.start_date}</p>
      <p><strong>Duration:</strong> {internship.duration}</p>
      <p><strong>Stipend:</strong> {internship.stipend}</p>

      <hr className="my-4" />

      {/* Upload Resume Form */}
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2 font-semibold">Upload Your Resume (PDF Only):</label>
        <input type="file" accept=".pdf" onChange={handleFileChange} className="border border-gray-300 p-2 rounded w-full" />

        <button type="submit" className="mt-4 w-full bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300">
          Submit Application
        </button>
      </form>
    </div>
  );
}
