// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhS-UlriKm8u0MooG2QTKR10caKewJZ3o",
  authDomain: "postman-chat-afe14.firebaseapp.com",
  projectId: "postman-chat-afe14",
  storageBucket: "postman-chat-afe14.firebasestorage.app",
  messagingSenderId: "368853009799",
  appId: "1:368853009799:web:811a4452222c58bc07bf22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig