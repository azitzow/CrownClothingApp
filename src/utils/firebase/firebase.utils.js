// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect
 } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
 });

export const signInWithGooglePopup = () => { signInWithPopup(getAuth(), provider) };