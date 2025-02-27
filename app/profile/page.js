 "use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ userId }) => {
  console.log("Received userId:", userId); // ✅ Check if userId is valid

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profileImage: "",
    resume: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ------------
  useEffect(() => {
    if (!userId) {
      console.error("❌ Error: userId is undefined or null.");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/profile/${userId}`);
        setProfile(res.data);
      } catch (error) {
        console.error("❌ Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    if (imageFile) formData.append("profileImage", imageFile);
    if (resumeFile) formData.append("resume", resumeFile);

    try {
      const res = await axios.post("http://localhost:5000/api/users/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProfile(res.data);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>

      {/* ✅ Profile Image Preview */}
      <div className="mb-4">
        <img
          src={profile.profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* ✅ Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="mb-4"
      />

      {/* Name Input */}
      <input
        type="text"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        placeholder="Name"
        className="block w-full p-2 border rounded mb-2"
      />

      {/* Email Input */}
      <input
        type="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        placeholder="Email"
        className="block w-full p-2 border rounded mb-2"
      />

      {/* ✅ Resume Upload */}
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResumeFile(e.target.files[0])}
        className="mb-4"
      />

      {/* ✅ Resume Link */}
      {profile.resume && (
        <div className="mb-4">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Resume
          </a>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Profile"}
      </button>
    </div>
  );
};

export default Profile;
