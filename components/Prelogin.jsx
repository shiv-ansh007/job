 
 
"use client";

import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const Prelogin = ({ setUser }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUser({
          displayName: user.displayName || "User",
          email: user.email || "No Email",
          photoURL: user.photoURL || "https://tecdn.b-cdn.net/img/new/avatars/2.jpg",
        });
      } else {
        setCurrentUser(null);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        setCurrentUser(user);
        setUser({
          displayName: user.displayName || "User",
          email: user.email || "No Email",
          photoURL: user.photoURL || "https://tecdn.b-cdn.net/img/new/avatars/2.jpg",
        });
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    setUser(null);
  };

  return (
    <>
      {currentUser ? (
        <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500">
          Logout
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-200 hover:text-black">
          Sign in with Google
        </button>
      )}
    </>
  );
};

export default Prelogin ;
