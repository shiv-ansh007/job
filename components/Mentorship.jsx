import React, { useState } from 'react';

const mentors = [
  {
    id: 1,
    name: 'Alice Johnson',
    field: 'Artificial Intelligence',
    bio: 'Expert in AI with 10 years of experience in machine learning and neural networks.',
    experience: '10 years',
    profileImage: '/images/alice.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    field: 'Web Development',
    bio: 'Full-stack developer specializing in modern web technologies.',
    experience: '8 years',
    profileImage: '/images/bob.jpg',
  },
  {
    id: 3,
    name: 'Carol Williams',
    field: 'Data Science',
    bio: 'Data scientist with a passion for big data and analytics.',
    experience: '5 years',
    profileImage: '/images/carol.jpg',
  },
  // Add more mentors as needed
];

const Mentorship = () => {
  const [selectedField, setSelectedField] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
    setSelectedMentor(null); // Reset selected mentor when field changes
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
      alert('You have selected ${selectedMentor.name} as your mentor.');
      // Implement further logic as needed, e.g., sending data to a server
    }
  };

  const handleBookSession = (mentorId) => {
    // Redirect to booking page or open booking modal
    // Pass the selected mentorId for reference
  };

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.field === selectedField &&
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      mentor.experience.includes(experienceFilter)
  );

  return (
    <div className="container bg-yellow-700 mx-auto  rounded-lg rounded-b-2xl flex-grow mb-20 px-7 pb-10 py-10 text-white">
      {/* Title and Field Selection */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="p-4">
          <h1 className="text-5xl  font-bold">Mentorship & Counseling</h1>
          <p className="text-lg mt-4">
            Get personalized guidance from industry experts and experienced mentors. <br />
            Whether you're seeking career advice, technical support, or personal development,
            our mentorship program is here to help.
          </p>
        </div>
        <div className="p-4 ">
          <label htmlFor="field-select" className="block text-lg font-medium">
            Select a Field
          </label>
          <select
            id="field-select"
            value={selectedField}
            onChange={handleFieldChange}
            className="mt-2 p-2 border rounded-lg w-full text-black"
          >
            <option value="">-- Choose a field --</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            {/* Add more fields as needed */}
          </select>
        </div>
      </div>

      {/* Available Mentors */}
      {selectedField && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Available Mentors in {selectedField}</h2>
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="mt-4 p-2 border rounded-lg w-full text-black"
          />
          <input
            type="text"
            placeholder="Filter by experience..."
            value={experienceFilter}
            onChange={handleExperienceFilterChange}
            className="mt-4 p-2 border rounded-lg w-full text-black"
          />
          <ul className="mt-4">
            {filteredMentors.map((mentor) => (
              <li
                key={mentor.id}
                className={`mt-2 p-4 border rounded-lg ${
                  selectedMentor?.id === mentor.id ? 'bg-blue-100' : 'bg-white'
                }`}
                onClick={() => handleMentorSelection(mentor)} 
              >
                <div className="flex items-center">
                  <img
                    src={mentor.profileImage}
                    alt={`${mentor.name}'s profile`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-black px-4 py-2">
                    <h3 className="text-xl mb-2 font-bold">{mentor.name}</h3>
                    <p>{mentor.bio}</p>
                    <p>Experience: {mentor.experience}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                    onClick={() => handleBookSession(mentor.id)}
                  >
                    Book Session
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {selectedMentor && (
            <div className="flex justify-end">
              <button
                aria-label="Confirm mentor selection"
                className="mt-6 px-6 py-3 bg-white text-yellow-600 rounded-lg hover:bg-yellow-700"
                onClick={handleConfirmSelection}
              >
                Confirm Selection
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mentorship;