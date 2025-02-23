 'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import { useEffect, useState } from "react";

const InternshipList = () => {
  const [internships, setInternships] = useState([]);
  const [query, setQuery] = useState("");
  const [showProfile, setShowProfile] = useState(false);
   
  const onClick = () => {
    setShowProfile((prev) => !prev);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/internships?search=${query}`)
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error("❌ Fetch Error:", err));
  }, [query]);

  return (
    <>
      {showProfile ? <Profile setShowProfile={setShowProfile} /> : null}
      <Navbar showProfile={showProfile} setShowProfile={setShowProfile} />

      {/* Page Background with Yellow Theme */}
      <div className="pl-8 py-20 mt-20 bg-gradient-to-b from-yellow-500 to-yellow-900 min-h-screen">
        
        {/* Heading with Gradient Text */}
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text text-center pb-6">
          Internship List
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search by company, role, or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 border-2 border-yellow-700 rounded-lg w-3/4 md:w-1/2 
                       focus:outline-none focus:ring-4 focus:ring-yellow-500 
                       bg-yellow-100 placeholder-gray-700 text-gray-900"
          />
        </div>

        {/* Internship List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {internships.length > 0 ? (
            internships.map((intern, index) => (
              <li
                key={index}
                className="p-6 bg-yellow-50 rounded-lg shadow-lg border border-yellow-700 
                          hover:shadow-xl hover:bg-yellow-200 hover:scale-105 hover:text-yellow-900 
                          transition-all duration-300 ease-in-out transform"
              >
                <h2 className="text-xl font-semibold text-yellow-800">{intern.internship_title}</h2>
                <p className="text-gray-700"><strong>Company:</strong> {intern.company_name}</p>
                <p className="text-gray-700"><strong>Location:</strong> {intern.location}</p>
                <p className="text-gray-700"><strong>Start Date:</strong> {intern.start_date}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {intern.duration}</p>
                <p className="text-gray-700"><strong>Stipend:</strong> {intern.stipend}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-900 text-center col-span-full bg-yellow-300 p-4 rounded-lg">
              No internships found.
            </p>
          )}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default InternshipList;
