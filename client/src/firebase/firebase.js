// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN7d94lre70gBjVyDCykUiyzvq7L1DE-U",
  authDomain: "social-media-d16de.firebaseapp.com",
  projectId: "social-media-d16de",
  storageBucket: "social-media-d16de.appspot.com",
  messagingSenderId: "983974830131",
  appId: "1:983974830131:web:da2090677c63efa16ac346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage=getStorage(app)

