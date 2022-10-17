// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByqXT3ZzRm9Sir7J3zx-gqDfKiTuaX6NM",
  authDomain: "e-bazar-69ef6.firebaseapp.com",
  projectId: "e-bazar-69ef6",
  storageBucket: "e-bazar-69ef6.appspot.com",
  messagingSenderId: "1088848386293",
  appId: "1:1088848386293:web:6ac58307045a8388970dbc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const userAuth = getAuth(app);
