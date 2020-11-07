import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../services/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: PostModel;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.post = this.route.snapshot.data.post;
  }
}
