import {Injectable,signal } from '@angular/core';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase.config';


export interface User{
  id?: string, //optional property exists only in the angular app
  // Holds the Firestore document ID (doc.id) in the Angular app.
  // This value is NOT stored as a field in Firestore documents.
  // It is added when reading data from Firestore and is used 
  // to identify a user for update and delete operations.
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = signal<User[]>([]);
 
  // It uses Firestore's collection function to get a reference to the users collection
  private usersCollection = collection(db, 'users');
  
  // READ (real-time)
loadUsers() {
  onSnapshot(this.usersCollection, snapshot => {
    const data = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as User[];

    this.users.set(data);
  });
}


  //CREATE
  async addUser(user: User) {
    await addDoc(this.usersCollection, user);
  }

  //UPDATE
  async updateUser(id: string, user:Partial<User>){
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, { ...user });
  }

  //DELETE
  async deleteUser(id:string){
    const userRef = doc(db, 'users', id);
    await deleteDoc(userRef);
  }
}
  




