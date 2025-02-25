 'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

 
import Link from "next/link";

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
  }, [query]); // Runs when query changes

  return (
    <>
      {showProfile ? <Profile setShowProfile={setShowProfile} /> : <></>}
      <Navbar showProfile={showProfile} setShowProfile={setShowProfile} />

      {/* Page Background */}
      <div className="pl-8 py-20 mt-25 bg-gradient-to-b from-amber-400 to-yellow-900 min-h-screen">

        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-center pb-4 mt-10">
          Internship List
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search by company, role, or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 border-2 border-yellow-700 rounded-lg w-3/4 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Internship List */}
  

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {internships.map((intern, index) => (
    <li
      key={index}
      className="p-6 bg-white rounded-lg shadow-md border border-yellow-600 
                hover:shadow-xl hover:bg-yellow-200 hover:scale-105 hover:text-yellow-800 
                transition duration-300 transform"
    >
      <h2 className="text-xl font-semibold">{intern.internship_title}</h2>
      <p><strong>Company:</strong> {intern.company_name}</p>
      <p><strong>Location:</strong> {intern.location}</p>
      <p><strong>Start Date:</strong> {intern.start_date}</p>
      <p><strong>Duration:</strong> {intern.duration}</p>
      <p><strong>Stipend:</strong> {intern.stipend}</p>
      
      {/* Link to myaplication page with internship details */}
      <Link
  href={{
    pathname: "/myaplication",
    query: {
      title: encodeURIComponent(intern.internship_title),
      company: encodeURIComponent(intern.company_name),
      location: encodeURIComponent(intern.location),
      start_date: encodeURIComponent(intern.start_date),
      duration: encodeURIComponent(intern.duration),
      stipend: encodeURIComponent(intern.stipend),
    },
  }}
  className="mt-4 inline-block bg-yellow-600 text-white font-semibold py-2 px-4 
             rounded-lg hover:bg-yellow-700 transition duration-300"
>
  Apply Now
</Link>
    </li>
  ))}
</ul>


      </div>

      <Footer />
    </>
  );
};

export default InternshipList;
