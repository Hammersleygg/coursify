// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgs8MH9xMyxr30K4ovrkM_LdYgjbmAkBY",
  authDomain: "coursify-b289f.firebaseapp.com",
  databaseURL: "https://coursify-b289f-default-rtdb.firebaseio.com",
  projectId: "coursify-b289f",
  storageBucket: "coursify-b289f.appspot.com",
  messagingSenderId: "343644100938",
  appId: "1:343644100938:web:4d14f233ad930a64a989b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

