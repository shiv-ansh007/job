"use client";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Internships from "@/components/Internships";
import Mentorship from "@/components/Mentorship";
import { useState } from "react";
import loginpage from "@/components/Login/Loginpage";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";


export default function Home({ children }) {
  const [showProfile, setShowProfile] = useState(false);

  const onClick = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <>
      <AuthProvider>
        {showProfile ? <Profile setShowProfile={setShowProfile} /> : null}
        <Navbar showProfile={showProfile} setShowProfile={setShowProfile} />
        
      
        <LandingPage />
        {children}
        <Footer />
        {/* ✅ Add the chatbot here */}
      </AuthProvider>
    </>
  );
}
