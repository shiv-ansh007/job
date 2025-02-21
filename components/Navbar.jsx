'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import Firebase methods
import AuthModal from "../components/AuthModal";
import PropTypes from "prop-types";

const Navbar = ({ showProfile, setShowProfile }) => {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsProfileOpen(false);
  };

  // Google sign-in function
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user); // You can access user info here
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-white p-4 shadow-md relative top-0 w-full z-50">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden border-0 bg-transparent px-2 text-black/50 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center text-xl font-bold">
          <img src="https://rajasthan.gov.in/assets/images/raj-logo.png" className="h-20" alt="TE Logo" />
        </Link>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:space-x-6 absolute lg:static bg-white w-full lg:w-auto top-14 right-0 lg:flex-row flex-col shadow-md lg:shadow-none ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a
              href="/"
              className="block gap-x-6 rounded-md px-4 py-2 text-black/60 hover:text-black hover:bg-gray-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/jobs"
              className="block gap-x-6 rounded-md px-4 py-2 text-black/60 hover:text-black hover:bg-gray-200 transition duration-300"
            >
              Jobs
            </a>
          </li>
          <li>
            <Link
              href="/intership"
              className="block gap-x-6 rounded-md px-4 py-2 text-black/60 hover:text-black hover:bg-gray-200 transition duration-300"
            >
              Internships
            </Link>
          </li>
          <li>
            <Link
              href="/mentor"
              className="block gap-x-6 rounded-md px-4 py-2 text-black/60 hover:text-black hover:bg-gray-200 transition duration-300"
            >
              Mentorship & Counseling
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="relative flex items-center space-x-4">
          {user ? (
            <div className="relative">
              {/* Profile Image & Toggle Dropdown */}
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center">
                <img
                  src={user.photoURL || "https://tecdn.b-cdn.net/img/new/avatars/2.jpg"}
                  className="rounded-full w-8 h-8"
                  alt="Profile"
                />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <ul className="absolute right-0 bg-white shadow-md rounded-md w-40 mt-2">
                  <li onClick={() => setShowProfile(true)}>
                    <Link href="" className="block px-4 py-2 hover:bg-gray-200">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-gray-200">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="block w-full px-4 py-2 hover:bg-gray-200 text-left">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button onClick={() => setIsAuthModalOpen(true)} className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
              Sign In / Register
            </button>
          )}
          {!user && (
            <button
              onClick={handleGoogleSignIn} // Use onClick to handle Google sign-in
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          )}
        </div>
      </nav>

      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

Navbar.propTypes = {
  setShowProfile: PropTypes.func.isRequired,
  showProfile: PropTypes.bool.isRequired,
};

export default Navbar;
