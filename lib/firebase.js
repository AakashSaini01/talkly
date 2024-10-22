import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "talkly-99ecb.firebaseapp.com",
  projectId: "talkly-99ecb",
  storageBucket: "talkly-99ecb.appspot.com",
  messagingSenderId: "265177323711",
  appId: "1:265177323711:web:eb75db4bcf01bf40c6ce0a",
  measurementId: "G-8V55ZXMKGW",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
