'use client';
import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Settings</h1>
      
      {/* Tabs */}
      <div className="flex justify-around border-b pb-2 mb-4">
        {['profile', 'security', 'notifications'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      {activeTab === 'profile' && <ProfileSettings />}
      {activeTab === 'security' && <SecuritySettings />}
      {activeTab === 'notifications' && <NotificationSettings />}
    </div>
  );
};

const ProfileSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Profile Settings</h2>
      <input type="text" placeholder="Display Name" className="w-full p-2 border rounded mb-3" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
      <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded mb-3" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
    </div>
  );
};

const SecuritySettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Security Settings</h2>
      <input type="password" placeholder="New Password" className="w-full p-2 border rounded mb-3" />
      <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded mb-3" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Password</button>
    </div>
  );
};

const NotificationSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Notification Settings</h2>
      <label className="flex items-center space-x-2 mb-2">
        <input type="checkbox" className="w-4 h-4" />
        <span>Email Notifications</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="w-4 h-4" />
        <span>SMS Notifications</span>
      </label>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3">Save Preferences</button>
    </div>
  );
};

export default Settings;
