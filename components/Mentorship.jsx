import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const mentors = [
  { id: 1, 
    name: 'Alice Johnson',
     field: 'Artificial Intelligence',
      bio: 'Expert in AI with 10 years of experience in machine learning and neural networks.',
    experience: '10 years',
    profileImage: '/images/alice.jpg' },
  { id: 2, name: 'Bob Smith', field: 'Web Development' },
  { id: 3, name: 'Carol Williams', field: 'Data Science' },
  // Add more mentors as needed
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'The mentorship program helped me advance my career in AI significantly.',
  },
  // Add more testimonials as needed
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
      alert(`You have selected ${selectedMentor.name} as your mentor.`);
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
      (mentor.experience ? mentor.experience.includes(experienceFilter) : true)
  );

      
    

  

  return (
    <div>
      
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold">Mentorship & Counseling</h1>
        <p className="text-lg text-gray-600 mt-4">
          Get personalized guidance from industry experts and experienced mentors.
          Whether you're seeking career advice, technical support, or personal development,
          our mentorship program is here to help.
        </p>
        <div className="mt-6 text-between">
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
            {/* Add more fields as needed */}
          </select>
        </div>
        {selectedField && (
          <div className="mt-8 text-left">
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
           
            <ul className="mt-4 text-left">
              {filteredMentors.map((mentor) => (
                <li
                  key={mentor.id}
                  className={`mt-2 p-2 border rounded-lg cursor-pointer ${
                    selectedMentor?.id === mentor.id ? 'bg-blue-100' : ''
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
                  <div className="flex justify-end">  
                  <button
                    className="mt-2 px-4 py-2 bg-green-600 text-white float: right; rounded-lg hover:bg-green-700"
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
