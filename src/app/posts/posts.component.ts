import { Component, OnInit } from '@angular/core';
import { PostModel } from '../services/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PostModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data.posts;
  }

  navigateToNewPostCreation(): void {
    this.router.navigate(['new-post']);
  }

  navigateToDetail(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
