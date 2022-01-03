import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiuP_vYU-9XRSkiz4rZqVsfAaE8HWPIFU",
  authDomain: "nwitter-91b9e.firebaseapp.com",
  projectId: "nwitter-91b9e",
  storageBucket: "nwitter-91b9e.appspot.com",
  messagingSenderId: "298715662310",
  appId: "1:298715662310:web:8932c4719d4e2b8266f827"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();