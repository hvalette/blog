import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { PostModel } from '../services/post.model';
import { StoreService } from '../services/store.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<PostModel[]> {
  constructor(private store: StoreService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PostModel[]> {
    return this.store.getPosts$().pipe(first());
  }
}
