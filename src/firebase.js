import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "olx-auth-444ed.firebaseapp.com",
  projectId: "olx-auth-444ed",
  storageBucket: "olx-auth-444ed.appspot.com",
  messagingSenderId: "524844755303",
  appId: "1:524844755303:web:0183acf8f082b3cf69a7c2",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
