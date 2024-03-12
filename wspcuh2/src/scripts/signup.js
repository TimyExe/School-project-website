import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref as dbRef, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../firebase-config';

function useSignUp() {
  const [error, setError] = useState(null);

  const signUp = async ({ username, email, password, number, image }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid;

      let imageUrl = '/wspcuh2/public/user.jpg'; // Default image URL
      if (image) {
        console.log(userId)
        const imageUploadRef = storageRef(storage, `profileImages/${userId}`);
        const imageSnapshot = await uploadBytes(imageUploadRef, image);
        imageUrl = await getDownloadURL(imageSnapshot.ref);
      }

      await set(dbRef(db, `users/${userId}`), {
        username,
        email,
        role: "demoUser",
        number,
        lastLogin: Date.now(),
        imageUrl // Saved or default image URL
      });

    } catch (error) {
      setError(error.message);
    }
  };

  return { signUp, error };
}

export default useSignUp;
