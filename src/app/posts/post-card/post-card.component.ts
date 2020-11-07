import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from '../../services/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: PostModel;
  @Output() postClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  cardClicked(): void {
    this.postClicked.emit(this.post.id);
  }
}
