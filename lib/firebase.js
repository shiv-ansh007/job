
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVQm_axAvyqB_S6r0jnacm3zluV2sOjm8",
  authDomain: "jobs-mentorship.firebaseapp.com",
  projectId: "jobs-mentorship",
  storageBucket: "jobs-mentorship.firebasestorage.app",
  messagingSenderId: "454754085987",
  appId: "1:454754085987:web:b44c2cd7f3627bf8fa1c56",
  measurementId: "G-D4CD5QFHFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage };
export {auth};

