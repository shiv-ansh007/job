"use client";
import { useState, useEffect } from "react";
import { userId } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";

import PropTypes from "prop-types";

import { db } from "../firebase"; // Import Firestore
import { doc, getDoc, setDoc } from "firebase/firestore";

const Profile = ({ setShowProfile, onEdit }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    experience: [],
    education: [],
  });

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const fetchResume = async () => {
      if (!userId) return;

      const docRef = doc(db, "resumes", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setResumeData(docSnap.data());
      }
    };

    fetchResume();
    [userId]
    setUser(auth.currentUser);
}, [user]); // Re-run when `user` changes
  

  const onClick = () => {
    setShowProfile((prev) => !prev);
  };

  const handleUpdateProfile = () => {
    if (user) {
      updateProfile(user, {
        displayName: "New Display Name",
        
        // Optionally, update the photo URL
        // photoURL: "https://example.com/new-profile-photo.jpg"
      })
        .then(() => {
          console.log("Profile updated successfully");
          const auth = getAuth();
          setUser(auth.currentUser );
          return user.reload();
        })
        .then(() => {
          const auth = getAuth();
          setUser(auth.currentUser); // Update state with new data
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    } else {
      console.log("No user is signed in.");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    // Optionally, refresh user data
    if (!userId) return;

    try {
      await setDoc(doc(db, "resumes", userId), resumeData);
      alert("Resume updated successfully!");
    } catch (error) {
      console.error("Error updating resume:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.profileOverlay} onClick={onClick}>
      <div className={styles.profileContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClick}>
          ✖
        </button>
        <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Resume Profile</h2>

      <input
        type="text"
        name="name"
        value={resumeData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded mb-2"
      />

      <input
        type="email"
        name="email"
        value={resumeData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded mb-2"
      />

      <button onClick={handleSave} className="mt-4 bg-blue-600 text-white p-2 rounded">
        Save Resume
      </button>
    </div>
  


        <h1 className="text-3xl font-bold z-index:99 text-center">Profile</h1>
        <div className="mt-4">
          <p className="text-lg">
            <strong>Name:</strong> {user ? user.displayName : "Loading..."}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user ? user.email : "Loading..."}
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> {user ? user.phoneNumber : "Loading..."}
          </p>
          <p className="text-lg">
            <strong>Location:</strong> {user ? user.location : "Loading..."}
          </p>
        </div>
        <button className={styles.editButton} onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <button className={styles.editButton} onClick={handleEdit}>
          Edit Profile
        </button>
        <div className={styles.container}>
          {isEditing ? (
            <EditProfile onSave={handleSave} onCancel={handleCancel} />
          ) : (
            <>
              <h1>Profile</h1>
              {/* Display user information */}
              <button onClick={handleEdit}>Edit Profile</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  setShowProfile: PropTypes.func.isRequired,
};

export default Profile;
