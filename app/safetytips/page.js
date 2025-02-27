"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const safetyTips = [
  { title: "Protect Your Personal Information", content: "Never share sensitive details like passwords, bank information, or personal addresses with anyone online." },
  { title: "Beware of Job Scams", content: "Be cautious of job offers that require upfront payment or request personal financial details." },
  { title: "Use Strong Passwords", content: "Ensure your account has a strong password with a mix of letters, numbers, and special characters." },
  { title: "Verify Employers", content: "Research the company and check for reviews before accepting any job offers." },
  { title: "Stay Safe in Interviews", content: "Prefer online interviews or meet in public places for safety. Inform someone about your interview location and time." },
  { title: "Avoid Phishing Emails", content: "Do not click on suspicious links in emails claiming to be from recruiters." },
];

export default function SafetyTips() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTips = safetyTips.filter((tip) =>
    tip.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6 mt-16">
        <div className="max-w-4xl  mx-auto bg-yellow-500 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Safety Tips</h1>
          <p className="text-center text-white mt-2">
            Follow these tips to stay safe while searching for jobs and internships.
          </p>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search safety tips..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Safety Tips Section */}
          <div className="mt-6">
            {filteredTips.length > 0 ? (
              filteredTips.map((tip, index) => (
                <div key={index} className="mb-4 border-b pb-3">
                  <h2 className="text-lg font-semibold">{tip.title}</h2>
                  <p className="text-white mt-1">{tip.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No matching safety tips found.</p>
            )}
          </div>

          {/* Additional Support */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Need More Help?</h2>
            <p className="text-gray-600 mt-1">Contact our support team for further assistance.</p>
            <div className="mt-3">
              <a href="mailto:support@example.com" className="block bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
