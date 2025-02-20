import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const mentors = [
  { id: 1, name: 'Alice Johnson', field: 'Artificial Intelligence' },
  { id: 2, name: 'Bob Smith', field: 'Web Development' },
  { id: 3, name: 'Carol Williams', field: 'Data Science' },
  // Add more mentors as needed
];

const Mentorship = () => {
  const [selectedField, setSelectedField] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
    setSelectedMentor(null); // Reset selected mentor when field changes
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

  const filteredMentors = mentors.filter(
    (mentor) => mentor.field === selectedField
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
            {/* Add more fields as needed */}
          </select>
        </div>
        {selectedField && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Available Mentors in {selectedField}</h2>
            <ul className="mt-4 text-left">
              {filteredMentors.map((mentor) => (
                <li
                  key={mentor.id}
                  className={`mt-2 p-2 border rounded-lg cursor-pointer ${
                    selectedMentor?.id === mentor.id ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => handleMentorSelection(mentor)}
                >
                  {mentor.name}
                </li>
              ))}
            </ul>
            {selectedMentor && (
              <button
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
