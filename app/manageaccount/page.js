"use client"; 
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { signOut, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ManageAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    currentPassword: "",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setFormData({
            name: userSnap.data().name,
            email: userSnap.data().email,
          });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("No user logged in.");

    try {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, { name: formData.name });
      alert("Account details updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Failed to update account.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      window.location.href = "/"; // Redirect to homepage
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Failed to log out.");
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return alert("No user logged in.");
    
    const confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmDelete) return;

    try {
      const credential = EmailAuthProvider.credential(user.email, formData.currentPassword);
      await reauthenticateWithCredential(user, credential); // Reauthenticate user
      
      const userDocRef = doc(db, "users", user.uid);
      await deleteDoc(userDocRef); // Delete from Firestore
      await deleteUser(user); // Delete from Firebase Auth

      alert("Account deleted successfully.");
      window.location.href = "/"; // Redirect to homepage
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account. Please log in again and try.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6 mt-16">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Manage Account</h1>
          <p className="text-center text-gray-500 mt-2">Update your profile details or manage your account settings.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="w-full p-3 border rounded-lg bg-gray-200 cursor-not-allowed"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-700">Upload Resume</label>
              <input type="file" name="resume" onChange={handleFileChange} className="w-full p-2 border rounded-lg" />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              Update Account
            </button>
          </form>

          <div className="mt-8 space-y-4 text-center">
            <Link href="/changepassword">
              <button className="w-full bg-gray-100 text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition">
                Change Password
              </button>
            </Link>

            <button onClick={handleLogout} className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Logout
            </button>

            <div>
              <label className="block text-gray-700">Enter Password to Confirm Deletion</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <button onClick={handleDeleteAccount} className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
