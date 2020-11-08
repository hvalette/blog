import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { PostModel } from '../services/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  post: PostModel;
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.post = this.route.snapshot.data.post;
    this.postForm = this.formBuilder.group({
      title: new FormControl(this.post?.title || '', Validators.required),
      content: new FormControl(this.post?.content || '', Validators.required),
    });
  }

  async publish(): Promise<void> {
    if (this.post) {
      await this.store.updatePost(this.post.id, this.postForm.value);
    } else {
      await this.store.createPost(this.postForm.value);
    }
    this.router.navigate(['/posts']);
  }
}
