import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    location: "",
    resume: "",
    skills: [],
    experience: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");

  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, [auth, db]);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSkillsChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setSkills(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      let resumeURL = userData.resume;
      if (resumeFile) {
        const resumeRef = ref(storage, `resumes/${user.uid}`);
        await uploadBytes(resumeRef, resumeFile);
        resumeURL = await getDownloadURL(resumeRef);
      }
      await setDoc(doc(db, "users", user.uid), {
        displayName: userData.displayName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        location: userData.location,
        resume: resumeURL,
        skills: skills,
        experience: experience,
      });
      alert("Profile updated successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userData.displayName}
        onChange={(e) => setUserData({ ...userData, displayName: e.target.value })}
        placeholder="Full Name"
      />
      <input
        type="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="text"
        value={userData.phoneNumber}
        onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
        placeholder="Phone Number"
      />
      <input
        type="text"
        value={userData.location}
        onChange={(e) => setUserData({ ...userData, location: e.target.value })}
        placeholder="Location"
      />
      <input type="file" onChange={handleFileChange} />
      <select multiple onChange={handleSkillsChange}>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="AI">AI</option>
        {/* Add more skills as needed */}
      </select>
      <textarea
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Experience"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfile;
