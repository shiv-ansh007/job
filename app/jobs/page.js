'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const jobsData = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York, USA", salary: "$80,000" },
  { id: 2, title: "Data Analyst", company: "DataWorld", location: "San Francisco, USA", salary: "$75,000" },
  { id: 3, title: "Web Developer", company: "Webify", location: "Remote", salary: "$70,000" },
  { id: 4, title: "Product Manager", company: "InnovateX", location: "Boston, USA", salary: "$90,000" },
  { id: 5, title: "UX Designer", company: "DesignHub", location: "Austin, USA", salary: "$65,000" },
  { id: 6, title: "DevOps Engineer", company: "CloudNet", location: "Seattle, USA", salary: "$85,000" }
];

const Jobs = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  return (
    <> 
    <Navbar/>
    <div className="bg-gray-100 py-10">
      <section id='jobs' className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-gray-600 font-medium">{job.salary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                Apply Now
              </button>
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
