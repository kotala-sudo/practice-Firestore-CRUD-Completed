// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp52HdGJzE3_EdQUhs91jsnQ8-vKuo7wE",
  authDomain: "fir-2026-1ae3d.firebaseapp.com",
  projectId: "fir-2026-1ae3d",
  storageBucket: "fir-2026-1ae3d.firebasestorage.app",
  messagingSenderId: "818914917438",
  appId: "1:818914917438:web:4382ad352d78b91a0d656f"
};

const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);

