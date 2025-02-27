"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthModal from "../components/AuthModal";
import PropTypes from "prop-types";

const Navbar = ({ showProfile, setShowProfile }) => {
  const [user, setUser] = useState(null);
  const [isScroll, setIsScroll] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsProfileOpen(false);
    router.push("/"); // Redirect to homepage after logout
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      router.push("/"); // Redirect to homepage after login
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden border-0 bg-transparent px-2 text-black/50 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center text-xl font-bold">
          <img
            src="https://rajasthan.gov.in/assets/images/raj-logo.png"
            className="h-20"
            alt="TE Logo"
          />
        </Link>

        {user && (
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
              isScroll
                ? ""
                : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
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
                href="/internships"
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
        )}

        {/* Right Icons */}
        <div className="relative flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md transition-all duration-300 hover:bg-gray-200 hover:text-black"
              >
                Profile
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <ul className="absolute right-0 bg-white shadow-md rounded-md w-56 mt-2">
                    <li className="px-4 py-2 text-gray-700 font-semibold">
                      {user.displayName || "User"}
                    </li>
                    <li className="px-4 py-2 text-gray-500">{user.email}</li>
                    <li className="border-t border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
                        My Account
                      </div>
                      <li onClick={() => setShowProfile(true)}>
                        <Link
                          href="/profile"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Profile
                        </Link>
                      </li>
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Home
                      </Link>
                      <Link
                        href="/applications"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        My Applications
                      </Link>
                      <Link
                        href="/resumebuilder"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Resume Builder
                      </Link>
                      <Link
                        href="/safetytips"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Safety Tips
                      </Link>
                      <Link
                        href="/helpcenter"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li className="border-t border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
                        More
                      </div>
                      <Link
                        href="/manageaccount"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Manage Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 hover:bg-gray-200 text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

Navbar.propTypes = {
  setShowProfile: PropTypes.func.isRequired,
  showProfile: PropTypes.bool.isRequired,
};

export default Navbar;
