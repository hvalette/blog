import { Component, OnInit } from '@angular/core';
import { PostModel } from '../services/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data.posts;
  }

  navigateToDetail(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
