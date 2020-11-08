import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from '../services/post.model';
import { StoreService } from '../services/store.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: PostModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: StoreService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.post = this.route.snapshot.data.post;
  }

  navigateToEditPost(): void {
    this.router.navigate([`edit-post/${this.post.id}`]);
  }

  async deletePost(): Promise<void> {
    const confirm = window.confirm('Supprimer ce post ?');
    if (confirm) {
      await this.store.deletePost(this.post.id);
      this.router.navigate(['posts']);
    }
  }
}
