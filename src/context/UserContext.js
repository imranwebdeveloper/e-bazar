import { createContext, useEffect, useState } from "react";
import { userAuth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// Created user context
export const UserContext = createContext("User");

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  // Created a new user with  Mail and Password
  const createUser = (user, password) =>
    createUserWithEmailAndPassword(userAuth, user, password);
  // Created a new user with Google
  const signWithGoogle = () => signInWithPopup(userAuth, provider);
  // Created a new user with Facebook
  // const signUpWithFacebook = () => {
  // };

  useEffect(() => {
    const unSubscript = onAuthStateChanged(userAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscript();
  }, []);

  const userInfo = { user, createUser, signWithGoogle };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
