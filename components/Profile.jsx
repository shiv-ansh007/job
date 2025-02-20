 "use client";
import styles from "./Profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({ setShowProfile ,onEdit}) => {
  const onClick = () => {
    setShowProfile((prev) => !prev); // ✅ Now it's a function
  };

  return (
    <div   className={styles.profileOverlay} onClick={onClick}>
      <div className={styles.profileContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClick}>
          ✖
        </button>
        <h1 className="text-3xl font-bold text-center">Profile</h1>
        <div className="mt-4">
          <p className="text-lg"><strong>Name:</strong> John Doe</p>
          <p className="text-lg"><strong>Email:</strong> johndoe@example.com</p>
          <p className="text-lg"><strong>Phone:</strong> +1 234 567 890</p>
          <p className="text-lg"><strong>Location:</strong> New York, USA</p>
          </div>
      <button className={styles.editButton} onClick={onEdit}>Edit Profile</button>
            </div>
        
      </div>
    
  );
};
Profile.propTypes = {
  setShowProfile: PropTypes.func.isRequired, // Corrected
};

export default Profile;
