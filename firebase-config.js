// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA_gGITL3vOX_wymV8m3c7h_2kYxUEL0A",
  authDomain: "email-5e336.firebaseapp.com",
  projectId: "email-5e336",
  storageBucket: "email-5e336.appspot.com",
  messagingSenderId: "561655323170",
  appId: "1:561655323170:web:42fcf886c34f2d5a16487b",
  measurementId: "G-J92WNBY5RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
