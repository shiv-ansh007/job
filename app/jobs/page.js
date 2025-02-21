'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { useState } from "react";

const jobsData = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York, USA", salary: "$80,000",
    description: "We are looking for a talented Software Engineer to join our team. You will work on cutting-edge technologies and help build high-performance applications."
 
  },
  { id: 2, title: "Data Analyst", company: "DataWorld", location: "San Francisco, USA", salary: "$75,000" },
  { id: 3, title: "Web Developer", company: "Webify", location: "Remote", salary: "$70,000" },
  { id: 4, title: "Product Manager", company: "InnovateX", location: "Boston, USA", salary: "$90,000" },
  { id: 5, title: "UX Designer", company: "DesignHub", location: "Austin, USA", salary: "$65,000" },
  { id: 6, title: "DevOps Engineer", company: "CloudNet", location: "Seattle, USA", salary: "$85,000" }
];

const Jobs = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [expandedJob, setExpandedJob] = useState(null); // State to track expanded job
  const toggleJobDetails = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null); // Collapse the job details if the same job is clicked
    } else {
      setExpandedJob(jobId); // Expand the clicked job details
    }
  };

  // ApplyButton component
  const ApplyButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
      setIsClicked(true);
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
                <ApplyButton />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Jobs;
