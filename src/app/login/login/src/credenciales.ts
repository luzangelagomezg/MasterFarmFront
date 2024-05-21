// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC45BvtlOe87T1qInR5R8TSYbrWchhescc",
  authDomain: "login-19cf2.firebaseapp.com",
  projectId: "login-19cf2",
  storageBucket: "login-19cf2.appspot.com",
  messagingSenderId: "609496542524",
  appId: "1:609496542524:web:abd0ea902b41f6d97b4239",
  measurementId: "G-SZEJPVPEHH"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
const analytics = getAnalytics(appFirebase);