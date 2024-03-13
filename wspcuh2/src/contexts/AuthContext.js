// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { ref as dbRef, get, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../firebase-config'; // Adjust path as needed

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch additional user data from the database if needed
        fetchUserData(user.uid).then(userData => {
          setCurrentUser(userData);
          console.log("there is data ")
          setLoading(false);
        }).catch(err => setError(err.message));
      } else {
        console.log("no")
        setCurrentUser(null);
        setLoading(false)
      }
    });

    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userData = await fetchUserData(userCredential.user.uid);
      
      setCurrentUser(userData);
      
    } catch (err) {
      setError(err.message);
    }
  };
  const logOut = () => {
    return signOut(auth);
  };
  const signUp = async ({ username, email, password, number, image }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      let imageUrl = '/user.jpg'; // Default image URL
      if (image) {
        const imageUploadRef = storageRef(storage, `profileImages/${userId}`);
        const imageSnapshot = await uploadBytes(imageUploadRef, image);
        imageUrl = await getDownloadURL(imageSnapshot.ref);
      }
      const userData = {
        username,
        email,
        role: "demoUser",
        number,
        lastLogin: Date.now(),
        imageUrl,
        
      };
      await set(dbRef(db, `users/${userId}`), userData);
      setCurrentUser({ ...userData, uid: userId });
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchUserData = async (userId) => {
    const userRef = dbRef(db, `users/${userId}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      
      return { uid: userId, ...snapshot.val() };
    } else {
      throw new Error("User data not found.");
    }
  };

  const value = {
    ioLoggedIn:currentUser!=null,
    currentUser,
    error,
    signIn,
    signUp,
    loading,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
