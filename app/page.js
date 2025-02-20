 "use client";
import Navbar from "@/components/Navbar";
import Jobs from "@/components/Jobs";
import LandingPage from "@/components/LandingPage";
import Internships from "@/components/Internships";
import Mentorship from "@/components/Mentorship";
import { useState } from "react";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import { AuthProvider } from "../context/AuthContext";

export default function Home({children}) {
  const [showProfile, setShowProfile] = useState(false);
   
  const onClick = () => {
    setShowProfile((prev) => !prev); // ✅ Now it's a function
  };

  return (
    <>
      <AuthProvider> 
      { showProfile?<Profile setShowProfile={setShowProfile}/>:<></>}
      <Navbar showProfile={showProfile} setShowProfile={setShowProfile} />
      
       <LandingPage/>
      {children}
      <Footer/>
      </AuthProvider>
    </>
  );
}
