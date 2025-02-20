  "use client";

import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

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
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Empowering Your Career Journey</h1>
        <p className="mt-4 text-lg">Find your dream job, internship, or mentor in one place.</p>

        {/* ✅ Hide "Sign Up Now" button when user is logged in */}
        {!user && (
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
            Sign Up Now
          </button>
        )}
      </header>

      <section className="p-10 text-center">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
