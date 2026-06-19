import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5lvDpZqiINchSVADwbfKcBcfB_IRY0NY",
  authDomain: "devops-41fba.firebaseapp.com",
  projectId: "devops-41fba",
  storageBucket: "devops-41fba.firebasestorage.app",
  messagingSenderId: "947799386471",
  appId: "1:947799386471:web:6c3cba622e1cba118c27c2",
  measurementId: "G-V3PS56XV23"
};
// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
