import { Injectable } from '@angular/core';
import { collection, getDocs, query, where, Firestore, limit, doc, docData} from '@angular/fire/firestore';
import { ref } from '@angular/fire/storage';
import { orderBy } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: Firestore) { }

   loadFeatured(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      const postsRef = collection(this.afs, 'posts');
      const q = query(postsRef, where('isFeatured', '==', true), limit(4));

      getDocs(q)
        .then((querySnapshot) => {
          const data: any[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  loadLatest(): Observable<any[]> {
 return new Observable<any[]>((observer) => {
      const postsRef = collection(this.afs, 'posts');
      const q = query(postsRef, orderBy('createdAt'));

      getDocs(q)
        .then((querySnapshot) => {
          const data: any[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  loadCategoryPosts(categoryId: string): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      const postsRef = collection(this.afs, 'posts');
      const q = query(postsRef, where('category.categoryId', '==', categoryId), limit(4));

      getDocs(q)
        .then((querySnapshot) => {
          const data: any[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

 loadOnePost(postId: string): Observable<any> {
    const postRef = doc(this.afs, `posts/${postId}`); // create doc ref
    return docData(postRef); // get observable
  }

  loadSimilar(catId: string){
return new Observable<any[]>((observer) => {
      const postsRef = collection(this.afs, 'posts');
      const q = query(postsRef, where('category.categoryId', '==', catId), limit(4));

      getDocs(q)
        .then((querySnapshot) => {
          const data: any[] = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
