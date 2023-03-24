// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvuzFNfYKb3A_S-ushbg0QFFTAU65dRSc",
  authDomain: "test1-9a386.firebaseapp.com",
  projectId: "test1-9a386",
  storageBucket: "test1-9a386.appspot.com",
  messagingSenderId: "370166461829",
  appId: "1:370166461829:web:8595f6b00e9e5ca26400ec",
  measurementId: "G-BKPKRG1DEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);