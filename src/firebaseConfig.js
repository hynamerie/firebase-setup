//npm install firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Storage
import { getStorage } from "firebase/storage";

//Firestore
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyB0Vdv9m7rVVI3grv-W7e0yEJyhppm9sP4",
  authDomain: "my-web-portfolio-react.firebaseapp.com",
  databaseURL: "https://my-web-portfolio-react-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-web-portfolio-react",
  storageBucket: "my-web-portfolio-react.appspot.com",
  messagingSenderId: "452701368883",
  appId: "1:452701368883:web:437e25979d0bf282076946",
  measurementId: "G-7SDXLZ7FDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);