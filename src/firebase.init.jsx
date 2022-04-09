// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzKD7_RhH4KxksjOxPSRC55IlA2rmRZVU",
  authDomain: "conceptional-tech-geeks.firebaseapp.com",
  projectId: "conceptional-tech-geeks",
  storageBucket: "conceptional-tech-geeks.appspot.com",
  messagingSenderId: "191169990067",
  appId: "1:191169990067:web:6163b38d9345eea4a00fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;