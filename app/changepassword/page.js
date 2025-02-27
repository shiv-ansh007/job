"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle Password Visibility
  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // Reauthenticate User before updating password
  const reauthenticateUser = async () => {
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, formData.currentPassword);
      await reauthenticateWithCredential(user, credential);
      return true;
    } catch (error) {
      alert("Incorrect current password.");
      return false;
    }
  };

  // Handle Password Change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("No user logged in.");
    if (formData.newPassword.length < 6) return alert("New password must be at least 6 characters.");

    const isReauthenticated = await reauthenticateUser();
    if (!isReauthenticated) return;

    try {
      await updatePassword(user, formData.newPassword);
      alert("Password updated successfully!");
      setFormData({ currentPassword: "", newPassword: "" });
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 mt-16">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Change Password</h1>
          <p className="text-center text-gray-500 mt-2">Secure your account by updating your password.</p>
          <div className="mt-8 p-6 border-t">
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-gray-700">Current Password</label>
                <div className="relative">
                  <input
                    type={showPassword.currentPassword ? "text" : "password"}
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("currentPassword")}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword.currentPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword.newPassword ? "text" : "password"}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("newPassword")}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword.newPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}