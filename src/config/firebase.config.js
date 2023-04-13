// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVkUT_MiZMkWAjKueh4OICt2WyydSCQz4",
  authDomain: "otp-project-12016.firebaseapp.com",
  projectId: "otp-project-12016",
  storageBucket: "otp-project-12016.appspot.com",
  messagingSenderId: "1059660257954",
  appId: "1:1059660257954:web:23ce3991586555d0a895fb",
  measurementId: "G-NBZQFPV215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
