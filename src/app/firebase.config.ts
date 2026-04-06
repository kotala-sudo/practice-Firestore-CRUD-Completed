// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //paste the firebaseConfig information of your own Firestore project.
};

const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);

