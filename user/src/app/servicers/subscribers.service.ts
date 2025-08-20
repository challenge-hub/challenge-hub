import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, addDoc, query, where, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private afs: Firestore) {}
   async addSubs(subData: any) {
    try {
      const colRef = collection(this.afs, 'subscribers');
      await addDoc(colRef, subData);
      console.log('Subscriber Saved Successfully');
    } catch (err) {
      console.error('Error saving subscriber', err);
    }
  }
 async checkSubs(email: string) {
    const colRef = collection(this.afs, 'subscribers');
    const q = query(colRef, where('email', '==', email));

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      console.log('Subscriber already exists');
      return true;
    } else {
      console.log('No subscriber found');
      return false;
    }
  }
}
