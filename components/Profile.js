'use client'; 
import styles from "./Profile.module.css";
import setShowProfile from "./Navbar";
import { useState } from "react";
const Profile = ({ setShowProfile }) => {
   


  return (
    <div className={styles.profileOverlay}>
      <div className={styles.profileContainer}>
        <button className={styles.closeButton} onClick={() => setShowProfile(false)}>X</button>
        <h1 className="text-3xl font-bold text-center">Profile</h1>
        <div className="mt-4">
          <p className="text-lg"><strong>Name:</strong> John Doe</p>
          <p className="text-lg"><strong>Email:</strong> johndoe@example.com</p>
          <p className="text-lg"><strong>Phone:</strong> +1 234 567 890</p>
          <p className="text-lg"><strong>Location:</strong> New York, USA</p>

          <h2 className="text-xl font-semibold mt-4">Skills</h2>
          <ul className="list-disc ml-5 text-lg">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>AI/ML</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Resume</h2>
          <a href="resume.pdf" className="text-blue-600 underline">Download Resume</a>

          <h2 className="text-xl font-semibold mt-4">Applied Jobs</h2>
          <ul className="list-disc ml-5 text-lg">
            <li>Software Engineer at TechCorp</li>
            <li>Data Analyst at DataWorld</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
