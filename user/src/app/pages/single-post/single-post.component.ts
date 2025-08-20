import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  standalone: true,
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
  imports: [
    PostCardComponent,
    CommentFormComponent,
    CommentListComponent,
    CommonModule,
    RouterLink,
  ],
})
export class SinglePostComponent implements OnInit {
  postData: any;
  similarPostArray: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.postService.loadOnePost(val['id']).subscribe((post) => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      });
    });
  }

  loadSimilarPost(catId: string) {
    this.postService.loadSimilar(catId).subscribe((val) => {
      this.similarPostArray = val;
    });
  }
}
