import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly posts: Observable<PostModel[]>;

  constructor(firestore: AngularFirestore) {
    this.posts = firestore
      .collection<PostModel>('posts')
      .valueChanges({ idField: 'id' });
  }

  getPosts$(): Observable<PostModel[]> {
    return this.posts;
  }

  getPostById$(id: string): Observable<PostModel> {
    return this.getPosts$().pipe(
      map((posts) => posts.find((post) => post.id === id))
    );
  }
}
