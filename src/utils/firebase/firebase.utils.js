// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
 } from "firebase/auth";
 import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkl3Dk23b-K2ySnJ3VyZ1-JoRfTJC2Lkw",
  authDomain: "crown-clothing-db-5319f.firebaseapp.com",
  projectId: "crown-clothing-db-5319f",
  storageBucket: "crown-clothing-db-5319f.appspot.com",
  messagingSenderId: "407479578607",
  appId: "1:407479578607:web:6683b4df79470f14c9901a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
 });

export const auth = getAuth();

export const signInWithGooglePopup = () => { signInWithPopup(auth, googleProvider) };

export const db = getFirestore(firebaseApp);

// Authenticated user
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}
