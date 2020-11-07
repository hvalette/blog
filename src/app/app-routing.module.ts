import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailResolver } from './resolvers/post-detail.resolver';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
