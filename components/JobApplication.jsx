import { useState, useEffect } from "react";
import axios from "axios";

const JobApplication = ({ jobId }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(
    localStorage.getItem(`applied_${jobId}`) === "true"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    status: "Pending",
  });

  useEffect(() => {
    localStorage.setItem(`applied_${jobId}`, hasApplied);
  }, [hasApplied, jobId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/applications", {
        ...formData,
        jobId,
        status: "Submitted",
      });

      alert("Application submitted successfully!");
      setIsFormOpen(false); // Close the form
      setHasApplied(true); // Change button text
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div>
      {/* ✅ Apply Button (Changes to "Applied" after submission) */}
      <button
        className={`mt-4 px-4 py-2 rounded-md ${
          hasApplied
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        onClick={() => !hasApplied && setIsFormOpen(true)}
        disabled={hasApplied}
      >
        {hasApplied ? "Applied" : "Apply Now"}
      </button>

      {/* ✅ Application Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-2xl font-bold mb-4">Job Application</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <input
                type="text"
                name="resume"
                placeholder="Resume Link"
                value={formData.resume}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <button
                type="submit"
                className=" bg-yellow-600  px-2 py-2 rounded-lg mt-2 hover:bg-yellow-700"
              >
                Submit Applicationnmmnmnmnmnm
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsFormOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplication;
