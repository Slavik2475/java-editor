import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4zcqKdgXrZ-wZBg0BGBfgav1oX2OzbQ8",
  authDomain: "java-mini-project-67c07.firebaseapp.com",
  projectId: "java-mini-project-67c07",
  storageBucket: "java-mini-project-67c07.firebasestorage.app",
  messagingSenderId: "236028809567",
  appId: "1:236028809567:web:46ade07d0207aeda8566ea",
  measurementId: "G-Y83FY030W8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);