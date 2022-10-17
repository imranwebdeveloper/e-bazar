import { createContext } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { userAuth } from "../firebase/firebase.config";
export const UserContext = createContext("user");

export const UserContextProvider = ({ children }) => {
  const setUser = (user, password) => {};
  const user = { setUser };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
