"use client";
import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import styles from "@/components/Profile.module.css";
import EditProfile from "./EditProfile";
import PropTypes from "prop-types";

const Profile = ({ setShowProfile }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []); // Runs only once when the component mounts

  const handleCloseProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const handleUpdateProfile = async () => {
    if (!user) {
      console.log("No user is signed in.");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: user.displayName || "User Name", // Keep the existing name if not changed
        phoneNumber: user.phoneNumber || "", // Ensure these exist
        photoURL: user.photoURL || "", // Optional photo update
      });

          // Reload user data
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser }); // Update state with new user data

      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className={styles.profileOverlay} onClick={handleCloseProfile}>
      <div className={styles.profileContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleCloseProfile}>
          ✖
        </button>
        <h1 className="text-3xl font-bold text-center">Profile</h1>
        <div className="mt-4">
          <p className="text-lg">
            <strong>Name:</strong> {user?.displayName || "Not Set"}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user?.email || "Not Set"}
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> {user?.phoneNumber || "Not Set"}
          </p>
        </div>

        <button className={styles.editButton} onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <button className={styles.editButton} onClick={() => setIsEditing(true)}>
          Edit Profile
        </button>

        {isEditing && <EditProfile user={user} setUser={setUser} setIsEditing={setIsEditing} />}
      </div>
    </div>
  );
};

Profile.propTypes = {
  setShowProfile: PropTypes.func.isRequired,
};

export default Profile;
