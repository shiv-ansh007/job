 "use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Job() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null,
    availability: "immediate",
  });

  const openModal = (job) => {
    setSelectedJob(job);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormData({ fullName: "", email: "", resume: null, availability: "immediate" });

    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("jobTitle", selectedJob?.title || "Unknown Job");
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }
    data.append("availability", formData.availability);

    try {
      const response = await axios.post("http://localhost:5000/api/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response.data.message);
      closeModal();
    } catch (error) {
      toast.error("Failed to submit application!");
    }
  };

  return (
    <div className="p-10 text-left">
      <ToastContainer />

      <h1 className="text-3xl font-bold">Job Listings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {[
          { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York, USA", salary: "$80,000" },
          { id: 2, title: "Data Analyst", company: "DataWorld", location: "San Francisco, USA", salary: "$75,000" },
        ].map((job) => (
          <div key={job.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">{job.title}</h3>
            <p className="text-gray-600">
              {job.company} - {job.location}
            </p>
            <p className="text-green-600 font-semibold">{job.salary}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => openModal(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Applying for {selectedJob?.title || "Job"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <input type="file" name="resume" onChange={handleFileChange} className="w-full p-2 border rounded" required />
              <div>
                <label className="block">Confirm your availability:</label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value="immediate"
                    checked={formData.availability === "immediate"}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="mr-2"
                  />
                  Yes, I am available immediately
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="availability"
                    value="custom"
                    checked={formData.availability === "custom"}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="mr-2"
                  />
                  No, I will specify availability
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
              >
                Submit Application
              </button>
            </form>
            <button onClick={closeModal} className="mt-4 text-gray-600">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
