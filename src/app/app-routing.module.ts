import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailResolver } from './resolvers/post-detail.resolver';
import { PostFormComponent } from './post-form/post-form.component';
import { LoginComponent } from './login/login.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    component: PostsComponent,
    resolve: { posts: PostsResolver },
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    resolve: { post: PostDetailResolver },
  },
  {
    path: 'new-post',
    component: PostFormComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'edit-post/:id',
    component: PostFormComponent,
    resolve: { post: PostDetailResolver },
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'login',
    component: LoginComponent,

    ...canActivate(() => redirectLoggedInTo(['posts'])),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
