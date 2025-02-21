 "use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jobsData = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York, USA", salary: "$80,000" },
  { id: 2, title: "Data Analyst", company: "DataWorld", location: "San Francisco, USA", salary: "$75,000" },
  { id: 3, title: "Web Developer", company: "Webify", location: "Remote", salary: "$70,000" },
  { id: 4, title: "Product Manager", company: "InnovateX", location: "Boston, USA", salary: "$90,000" },
  { id: 5, title: "UX Designer", company: "DesignHub", location: "Austin, USA", salary: "$65,000" },
  { id: 6, title: "DevOps Engineer", company: "CloudNet", location: "Seattle, USA", salary: "$85,000" }
];

const Jobs = () => {
  const [filteredJobs] = useState(jobsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
    resumeFile: null, // ✅ Stores uploaded file
  });
  const [expandedJob, setExpandedJob] = useState(null);// State to track expanded job
 
const toggleJobDetails = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null); // Collapse the job details if the same job is clicked
    } else {
      setExpandedJob(jobId); // Expand the clicked job details
    }
    
    // ApplyButton component
    const ApplyButton = () => {
      const [isClicked, setIsClicked] = useState(false);
      const handleClick = () => {
        setIsClicked(true);
    };

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, resumeFile: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Open Apply Form
  const openForm = (job) => {
    setSelectedJob(job);
    setIsFormOpen(true);
  };

  // Close Apply Form
  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedJob(null);
    setFormData({ name: "", email: "", resume: "", coverLetter: "", resumeFile: null });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || (!formData.resume && !formData.resumeFile)) {
      toast.error("❌ Please fill in all required fields!");
      return;
    }
  
    const applicationData = new FormData();
    applicationData.append("name", formData.name);
    applicationData.append("email", formData.email);
    applicationData.append("resumeLink", formData.resume);
    applicationData.append("coverLetter", formData.coverLetter);
  
    if (formData.resumeFile) {
      applicationData.append("resumeFile", formData.resumeFile);
    }
  
    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: applicationData,
      });
  
      const result = await response.json();

      if (response.ok) {
        toast.success(" Application submitted successfully!");
        closeForm();
      } else {
        toast.error(`❌ ${result.message}`);
      }
    } catch (error) {
      console.error("❌ Error submitting application:", error);
      toast.error("❌ Failed to submit application.");
    }
  };
  return (
     
    <button
    onClick={handleClick}
    className={`mt-4 px-4 py-2 rounded-md text-white transition-colors duration-300 
      ${isClicked ? 'bg-yellow-500' : 'bg-yellow-600'} 
      hover:${isClicked ? 'bg-yellow-500' : 'bg-yellow-700'}`}
  >
    {isClicked ? "Applied" : "Apply Now"} {/* Change the text here */}
  </button>
  );
};

return (
  <>
     <Navbar/>
    <div className="bg-gray-100 py-6  flex">
      <section id="jobs" className="max-w-6xl bg-yellow-600 flex-column flex-grow py-6 rounded-lg mx-auto px-6">
        <h1 className="text-3xl font-bold text-white text-center p-6 text-gray-800 mb-8">JOBS Listings</h1>
        <div className="grid grid-cols-1 flex-grow md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600">{job.company} - {job.location}</p>
                  <p className="text-gray-600 font-medium">{job.salary}</p>
                    {/* Conditionally render expanded job details */}
                {expandedJob === job.id ? (
                  <div className="mt-4 text-gray-700">
                    <p>{job.description}</p>
                    <p className="mt-2">You will be working with a team of experts to develop and maintain high-performance systems.</p>
                    <p className="mt-2">This position offers growth opportunities and the chance to work with cutting-edge technology.</p>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleJobDetails(job.id)}
                    className=" mt-8 px-4 mr-4 py-2 rounded-md bg-yellow-600 text-white  hover:bg-yellow-700"
                  >
                    Click to know more
                  </button>
                )}
                {/* Use ApplyButton component */}
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => openForm(job)}
                >
                  Apply Now
                </button>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
  
        {/* Apply Now Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <button className="absolute top-2 right-2 text-gray-500" onClick={closeForm}>✖</button>
              <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob?.title}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded mb-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded mb-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="url"
                  name="resume"
                  placeholder="Resume Link (Google Drive, etc.)"
                  className="w-full p-2 border rounded mb-2"
                  value={formData.resume}
                  onChange={handleChange}
                />
                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter (Optional)"
                  className="w-full p-2 border rounded mb-2"
                  value={formData.coverLetter}
                  onChange={handleChange}
                ></textarea>
  
                {/* ✅ File Input for Resume Upload */}
                <input
                  type="file"
                  name="resumeFile"
                  className="w-full p-2 border rounded mb-2"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                />
  
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
  
        {/* Toast Notification Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  };

  return (
    <>
       <Navbar/>
      <div className="bg-gray-100 py-6  flex">
        <section id="jobs" className="max-w-6xl bg-yellow-600 flex-column flex-grow py-6 rounded-lg mx-auto px-6">
          <h1 className="text-3xl font-bold text-white text-center p-6 text-gray-800 mb-8">JOBS Listings</h1>
          <div className="grid grid-cols-1 flex-grow md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company} - {job.location}</p>
                <p className="text-gray-600 font-medium">{job.salary}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => openForm(job)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

      {/* Apply Now Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeForm}>✖</button>
            <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob?.title}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-2 border rounded mb-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="url"
                name="resume"
                placeholder="Resume Link (Google Drive, etc.)"
                className="w-full p-2 border rounded mb-2"
                value={formData.resume}
                onChange={handleChange}
              />
              <textarea
                name="coverLetter"
                placeholder="Cover Letter (Optional)"
                className="w-full p-2 border rounded mb-2"
                value={formData.coverLetter}
                onChange={handleChange}
              ></textarea>

              {/* ✅ File Input for Resume Upload */}
              <input
                type="file"
                name="resumeFile"
                className="w-full p-2 border rounded mb-2"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
};

export default Jobs;
