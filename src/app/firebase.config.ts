// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Add your own Firebase project's firebaseConfig info goes here.
};

const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);

