"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const faqs = [
  { question: "How do I apply for a job?", answer: "You can apply by visiting the job listings page and clicking on the apply button for your desired job." },
  { question: "How do I contact support?", answer: "You can reach our support team via email at support@example.com or through live chat." },
  { question: "Can I upload my resume?", answer: "Yes, you can upload your resume in your profile section under 'My Resume'." },
  { question: "How does AI job recommendation work?", answer: "Our AI analyzes your skills, experience, and preferences to suggest the most suitable jobs for you." },
  { question: "What is the mentorship program?", answer: "Our mentorship program connects you with industry professionals who can guide your career path." },
  { question: "How do I find internships?", answer: "You can find internship listings on our platform under the 'Internships' section." },
  { question: "Can I track my job applications?", answer: "Yes, you can track your submitted applications in your profile under the 'My Applications' section." },
  { question: "How do I use the resume builder?", answer: "Our resume builder helps you create a professional resume step-by-step. Visit the 'Resume Builder' section to get started." },
  { question: "Is there a way to get personalized job alerts?", answer: "Yes, you can set up job alerts based on your preferences in the notification settings." },
  { question: "How do I connect with mentors?", answer: "Go to the 'Mentor Connect' section, browse available mentors, and request a session with them." },
  { question: "How does the AI-powered job matching work?", answer: "Our AI scans job listings and compares them to your profile to provide the best-matching opportunities." },
];

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-100 bg-gray-100 mt-16 p-6">
        <div className="max-w-4xl mx-auto bg-yellow-500 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Help Center</h1>
          <p className="text-center text-gray-500 mt-2">
            Find answers to common questions or contact support.
          </p>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* FAQ Section */}
          <div className="mt-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b pb-3">
                  <h2 className="text-lg font-semibold">{faq.question}</h2>
                  <p className="text-gray-600 mt-1">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No matching questions found.</p>
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Need More Help?</h2>
            <p className="text-gray-600 mt-1">Contact our support team for further assistance.</p>
            <div className="mt-3">
              <a href="mailto:support@example.com" className="block bg-white-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition">
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
