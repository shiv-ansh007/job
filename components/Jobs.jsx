'use client';
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
    <div>
      <section id='jobs' className="p-10 text-left">
        <h1 className="text-3xl font-bold">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="p-4 border rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl">{job.title}</h3>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-green-600 font-semibold">{job.salary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
