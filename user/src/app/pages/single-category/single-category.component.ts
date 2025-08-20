import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  standalone: true,
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
  imports: [PostCardComponent, CommonModule],
})
export class SingleCategoryComponent {
  postArray: Array<any> = [];
  categoryObj: any = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      console.log(val);
      this.categoryObj = val;
      this.postService.loadCategoryPosts(val['id']).subscribe((post) => {
        this.postArray = post;
      });
    });
  }
}
