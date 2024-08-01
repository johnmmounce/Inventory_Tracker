// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSqghqhxNICYqruCRg4xMwg2J82MihRRk",
  authDomain: "inventory-management-220df.firebaseapp.com",
  projectId: "inventory-management-220df",
  storageBucket: "inventory-management-220df.appspot.com",
  messagingSenderId: "1008553603625",
  appId: "1:1008553603625:web:558418b41f5dcf8088e238",
  measurementId: "G-CTPGLYGXRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
