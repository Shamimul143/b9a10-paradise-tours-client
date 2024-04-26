// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk-6E8gHXe5DuPsQPZ3CRjV_56sQw5Nn8",
  authDomain: "my-authintication.firebaseapp.com",
  projectId: "my-authintication",
  storageBucket: "my-authintication.appspot.com",
  messagingSenderId: "578527371247",
  appId: "1:578527371247:web:b88cf859cc1d0a06a8a01a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth