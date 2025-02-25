// pages/my-applications.js

import { useEffect, useState } from "react";
import { auth } from "../lib/firebase"; // Assuming you have Firebase setup
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

const MyApplications = () => {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]); // Replace with actual data fetching logic

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      // Fetch the user's applications (this is a mock, replace with actual API/Firebase call)
      fetchApplications(user.uid);
    }
  }, [user]);

  const fetchApplications = async (userId) => {
    // Replace this mock data with an actual fetch call to your database or API
    const mockApplications = [
      { id: 1, title: "Software Engineer", status: "Applied" },
      { id: 2, title: "Data Analyst", status: "Interview" },
    ];
    setApplications(mockApplications);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">My Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map((application) => (
            <li key={application.id} className="mb-2">
              <Link href={`/applications/${application.id}`}>
                <a className="text-blue-500 hover:underline">
                  {application.title} - {application.status}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyApplications;
