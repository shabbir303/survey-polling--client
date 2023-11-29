// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNGNBNqmmz0MeRBqGg65VQUL5lBt87THk",
  authDomain: "survey-polling-b02b9.firebaseapp.com",
  projectId: "survey-polling-b02b9",
  storageBucket: "survey-polling-b02b9.appspot.com",
  messagingSenderId: "258033137725",
  appId: "1:258033137725:web:e6b08419b97f4f4b081254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;