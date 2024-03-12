import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref as dbRef, get } from "firebase/database";
import { auth, db } from '../firebase-config';

function useSignIn() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        fetchUserData(user.uid);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      await fetchUserData(userId);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const userRef = dbRef(db, `users/${userId}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        setUser({ ...snapshot.val(), uid: userId });
      } else {
        setError("User data not found.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { signIn, user, error, isLoggedIn };
}

export default useSignIn;
