 "use client";
import React, { useState } from "react";
 

const mentors = [
  {
    id: 1,
    name: "Alice Johnson",
    field: "Artificial Intelligence",
    bio: "Expert in AI with 10 years of experience in machine learning and neural networks.",
    experience: "10 years",
    profileImage: "/images/alice.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    field: "Web Development",
    bio: "Full-stack developer specializing in modern web technologies.",
    experience: "8 years",
    profileImage: "/images/bob.jpg",
  },
  {
    id: 3,
    name: "Carol Williams",
    field: "Data Science",
    bio: "Data Scientist with expertise in big data and analytics.",
    experience: "6 years",
    profileImage: "/images/carol.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "The mentorship program helped me advance my career in AI significantly.",
  },
];

const Mentorship = () => {
  const [selectedField, setSelectedField] = useState("");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
    setSelectedMentor(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleExperienceFilterChange = (e) => {
    setExperienceFilter(e.target.value);
  };

  const handleMentorSelection = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleConfirmSelection = () => {
    if (selectedMentor) {
      alert(`You have selected ${selectedMentor.name} as your mentor.`);
    }
  };

  const handleBookSession = (mentorId) => {
    alert(`Booking session for mentor ID: ${mentorId}`);
  };

  const filteredMentors = mentors.filter(
    (mentor) =>
      (selectedField ? mentor.field === selectedField : true) &&
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (experienceFilter ? mentor.experience.includes(experienceFilter) : true)
  );

  return (
    <div>
      
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold">Mentorship & Counseling</h1>
        <p className="text-lg text-gray-600 mt-4">
          Get personalized guidance from industry experts and experienced mentors.
        </p>

        <div className="mt-6">
          <label htmlFor="field-select" className="block text-lg font-medium text-gray-700">
            Select a Field
          </label>
          <select
            id="field-select"
            value={selectedField}
            onChange={handleFieldChange}
            className="mt-2 p-2 border rounded-lg"
          >
            <option value="">-- Choose a field --</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        {selectedField && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Available Mentors in {selectedField}</h2>
            <input
              type="text"
              placeholder="Search mentors..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="mt-4 p-2 border rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Filter by experience..."
              value={experienceFilter}
              onChange={handleExperienceFilterChange}
              className="mt-4 p-2 border rounded-lg w-full"
            />

            <ul className="mt-4">
              {filteredMentors.map((mentor) => (
                <li
                  key={mentor.id}
                  className={`mt-2 p-4 border rounded-lg cursor-pointer ${
                    selectedMentor?.id === mentor.id ? "bg-blue-100" : ""
                  }`}
                  onClick={() => handleMentorSelection(mentor)}
                >
                  <div className="flex items-center">
                    <img
                      src={mentor.profileImage}
                      alt={`${mentor.name}'s profile`}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.bio}</p>
                      <p className="text-gray-600">Experience: {mentor.experience}</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      onClick={() => handleBookSession(mentor.id)}
                    >
                      Book Session
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {selectedMentor && (
              <button
                aria-label="Confirm mentor selection"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={handleConfirmSelection}
              >
                Confirm Selection
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentorship;
