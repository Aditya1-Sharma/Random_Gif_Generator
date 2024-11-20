// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf1Pj_M7O1nZAfN1RGivR_mPgXZBrp8xI",
  authDomain: "fir-auth-4e8a8.firebaseapp.com",
  projectId: "fir-auth-4e8a8",
  storageBucket: "fir-auth-4e8a8.firebasestorage.app",
  messagingSenderId: "548152650122",
  appId: "1:548152650122:web:0f367c03f1d97530d14073",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
