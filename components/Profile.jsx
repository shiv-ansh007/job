
"use client";
import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import styles from "./Profile.module.css";
import EditProfile from "./EditProfile";
import PropTypes from "prop-types";

const Profile = ({ setShowProfile, onEdit }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    setUser(auth.currentUser);
}, []); // Re-run when `user` changes
  

  const onClick = () => {
    setShowProfile((prev) => !prev);
  };


  const handleUpdateProfile = async () => {
    if (!user) {
      console.log("No user is signed in.");
      return;
    }
  
    try {
      await updateProfile(user, {
        displayName: "New Display Name",
      });
  
      console.log("Profile updated successfully");
  
      await user.reload(); // Ensure Firebase reloads user data
      const updatedUser = getAuth().currentUser; // Get the latest user data
      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  
  

   const handleProfileUpdate = () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    setUser(currentUser); // Refresh user data
  };


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optionally, refresh user data
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
        <h1 className="text-3xl font-bold z-index:99 text-center">Profile</h1>
        <div className="mt-4  px-4 py-2">
          <p className="text-lg rounded-lg py-2  border-2 border-yellow-400">
            <strong className="px-2">Name :</strong> {user ? user.displayName : "Loading..."}
          </p>
          <p className="text-lg rounded-lg py-2 mt-2 border-2 border-yellow-400">
            <strong  className="px-2">Email :</strong> {user ? user.email : "Loading..."}
          </p>
          <p className="text-lg rounded-lg py-2 mt-2 border-2 border-yellow-400">
            <strong  className="px-2">Phone :</strong> {user ? user.phoneNumber : "Loading..."}
          </p>
          <p className="text-lg rounded-lg py-2 mt-2 border-2 border-yellow-400">
            <strong  className="px-2">Location :</strong> {user ? user.location : "Loading..."}
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
            <EditProfile onProfileUpdate={handleProfileUpdate}  />
          ) : (
            <>
              <h1></h1>
              {/* Display user information */}
              <button onClick={handleEdit}></button>
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
