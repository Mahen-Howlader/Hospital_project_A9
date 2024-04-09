import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const ProviderContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

function AuthProvider({ children }) {
  const Gprovider = new GoogleAuthProvider();
  const Tprovider = new TwitterAuthProvider();
  const [user, setUser] = useState(null);

  function createEmailPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //   google register
  function googleCreate() {
    return signInWithPopup(auth, Gprovider);
  }

  //   twitter register
  function TwitterCreate() {
    return signInWithPopup(auth, Tprovider);
  }

  //   signOut
  function logOut (){
    signOut(auth)
  }
  //   onAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  const data = {
    createEmailPassword,
    googleCreate,
    TwitterCreate,
    user,
    setUser,
    logOut
  };
  return (
    <ProviderContext.Provider value={data}>{children}</ProviderContext.Provider>
  );
}

export default AuthProvider;
