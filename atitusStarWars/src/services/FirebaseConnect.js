// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXNS9fp3O9fYR4ZM-7W7VEwE9-M0Gdg7k",
  authDomain: "projeto-atitus-star-wars.firebaseapp.com",
  projectId: "projeto-atitus-star-wars",
  storageBucket: "projeto-atitus-star-wars.appspot.com",
  messagingSenderId: "1067678617781",
  appId: "1:1067678617781:web:c21813d063290ad3a96efc",
  measurementId: "G-ZLXB5WPYN3"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);