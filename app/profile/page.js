'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    profilePicture: "",
    resume: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  // Fetch user data
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${userId}`).then((res) => setProfile(res.data));
  }, [userId]);

  // Upload files to Firebase Storage
  const uploadFile = async (file, type) => {
    if (!file) return;
    const fileRef = ref(storage, `users/${userId}/${type}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  // Handle Save
  const handleSave = async () => {
    let profilePicUrl = profile.profilePicture;
    let resumeUrl = profile.resume;

    if (imageFile) profilePicUrl = await uploadFile(imageFile, "profilePic");
    if (resumeFile) resumeUrl = await uploadFile(resumeFile, "resume");

    const updatedProfile = { ...profile, profilePicture: profilePicUrl, resume: resumeUrl };

    axios.put(`http://localhost:5000/api/users/${userId}`, updatedProfile).then((res) => {
      setProfile(res.data);
      alert("Profile updated successfully!");
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>

      {/* Profile Picture */}
      <div className="mb-4">
        <img src={profile.profilePicture || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full" />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
      </div>

      {/* User Info */}
      <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
      <input type="email" className="w-full p-2 border rounded mb-2" placeholder="Email" value={profile.email} readOnly />
      <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Phone" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
      <textarea className="w-full p-2 border rounded mb-2" placeholder="Bio" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />

      {/* Resume Upload */}
      <div className="mb-4">
        <input type="file" accept=".pdf" onChange={(e) => setResumeFile(e.target.files[0])} />
        {profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">View Resume</a>}
      </div>

      {/* Save Button */}
      <button onClick={handleSave} className="w-full bg-blue-500 text-white p-2 rounded">Save Profile</button>
    </div>
  );
};

export default Profile;
