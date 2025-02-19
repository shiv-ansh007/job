
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

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

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};

