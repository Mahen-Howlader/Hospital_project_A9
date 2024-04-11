import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const ProviderContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

function AuthProvider({ children }) {
  const Gprovider = new GoogleAuthProvider();
  const Tprovider = new TwitterAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function createEmailPassword(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //   google register
  function googleCreate() {
    setLoading(true);
    return signInWithPopup(auth, Gprovider);
  }

  //   twitter register
  function TwitterCreate() {
    setLoading(true);
    return signInWithPopup(auth, Tprovider);
  }

  //   signOut
  function logOut() {
    // setLoading(false)
    setUser(null);
    signOut(auth);
  }

  function userProfileUpdate(name, pahoturl) {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: pahoturl,
    });
  }

  // signInWithEmailAndPassword
  function LogInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //observe
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return () =>{ subscribe()};
  }, []);

  const data = {
    createEmailPassword,
    googleCreate,
    TwitterCreate,
    user,
    setUser,
    logOut,
    userProfileUpdate,
    LogInWithEmailAndPassword,
    loading,
  };
  return (
    <ProviderContext.Provider value={data}>{children}</ProviderContext.Provider>
  );
}

export default AuthProvider;
