"use client";

import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import react from 'react';


const Home = () => {
  const [user, setUser] = useState(null); // ✅ Tracks user login state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ✅ Updates when user logs in or out
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <header className=" bg-yellow-600 text-white text-left pl-8 py-20 flex">
      <div className="w-2/3 p-8">
        <h1 className="text-4xl  font-bold">Empowering Your Career Journey</h1>
        <h2 className="mt-2 text-lg font-bold">
          Find your dream job, internship, or mentor in one place.
        </h2>
        <p className="mt-3 text-gray-200">
          An Interactive Job and Internship Platform for Technical Education <br />
          Department, Govt. of Rajasthan
        </p>

        

        <div className="mt-8">
        <button className="bg-white text-yellow-600 font-semibold py-2 px-4 rounded mr-4" >
          Get Started
        </button>
        <button className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded ">
          Learn More
        </button>
        </div>
        {/* ✅ Hide "Sign Up Now" button when user is logged in */}
        {!user && (
          <button className="mt-6 bg-white text-yellow-600 px-6 py-2 rounded-full font-semibold">
            Sign Up Now
          </button>
         
          
        )}
        </div>
        <div className="w-1/3 p-8">
<h2 className="  text-xl font-bold text-white">
          राजस्थान सरकार द्वारा इंटर्नशिप और नौकरियों को बढ़ावा देना
        </h2>
        <p className="mt-2 text-whitek">
          विभिन्न क्षेत्रों में इंटर्नशिप और नौकरी के अवसरों के लिए हमारे प्लेटफ़ॉर्म का उपयोग करें।
        </p>
        </div>
      </header>
       
     
   

      <section className="p-10  text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">AI-Driven Job Matching</h3>
            <p>Get personalized job recommendations based on your skills.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Internship & Training</h3>
            <p>Secure internships and gain hands-on experience.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Mentorship & Guidance</h3>
            <p>Connect with industry professionals for career advice.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">AI-Driven Job Matching</h3>
            <p>Get personalized job recommendations based on your skills.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Internship & Training</h3>
            <p>Secure internships and gain hands-on experience.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Mentorship & Guidance</h3>
            <p>Connect with industry professionals for career advice.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
