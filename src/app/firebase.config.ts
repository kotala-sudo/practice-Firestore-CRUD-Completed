// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Paste the firebaseConfig from your Firebase project found under Project Settings here.
};

const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);

