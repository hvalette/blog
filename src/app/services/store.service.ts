import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';
import { first, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly posts: Observable<PostModel[]>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    this.posts = firestore
      .collection<PostModel>('posts', (ref) =>
        ref.orderBy('publishDate', 'desc')
      )
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

  async createPost(
    post: Pick<PostModel, 'title' | 'content'>
  ): Promise<unknown> {
    const user = this.authService.getConnectedUser();
    const completePost: PostModel = {
      ...post,
      publishDate: new Date(),
      author: user.displayName,
    };
    return this.firestore.collection<PostModel>('posts').add(completePost);
  }

  updatePost(
    id: string,
    post: Pick<PostModel, 'title' | 'content'>
  ): Promise<void> {
    return this.firestore
      .collection<PostModel>('posts')
      .doc(id)
      .set(post, { merge: true });
  }

  deletePost(id: string): Promise<void> {
    return this.firestore.collection<PostModel>('posts').doc(id).delete();
  }
}
