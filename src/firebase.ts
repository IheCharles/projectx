// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5IQ3tw9B4Qq5W2-GKd4EnxMOVqS31Nyw",
  authDomain: "safelink-88497.firebaseapp.com",
  projectId: "safelink-88497",
  storageBucket: "safelink-88497.firebasestorage.app",
  messagingSenderId: "622268402787",
  appId: "1:622268402787:web:26a5467a89887cb265fc56",
  measurementId: "G-04MQREPT88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
