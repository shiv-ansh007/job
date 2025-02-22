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
    setUser(auth.currentUser);
   }, []); // Re-run when `user` changes
  

  const onClick = () => {
    setShowProfile((prev) => !prev);
  };

  const handleUpdateProfile = () => {
    if (user) {
      updateProfile(user, {
        displayName: "New Display Name",
      })
        .then(async () => {
          console.log("Profile updated successfully");
          await user.reload(); // Reload the user from Firebase
          const auth = getAuth();
          setUser(auth.currentUser); // Update state with latest user data
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    } else {
      console.log("No user is signed in.");
    }
  };

  

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(true);
    // Optionally, refresh user data
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className=" max-h-[400px] mt-20 overflow-y-auto   overflow-x-hidden">
    <div className={styles.profileOverlay} onClick={onClick}>
      <div  className={styles.profileContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClick}>
          ✖ 
        </button>
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
       
        <button className={styles.editButton} onClick={handleEdit}>
          Edit Profile
        </button>
        <div className={styles.container}>
          {isEditing ? (
            <EditProfile onSave={handleSave} onCancel={handleCancel} />
          ) : (
            <>
             
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

Profile.propTypes = {
  setShowProfile: PropTypes.func.isRequired,
};

export default Profile;
