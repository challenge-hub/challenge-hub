import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostsService } from '../../services/posts.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [PostCardComponent, NgForOf],
})
export class HomeComponent {
  featuredPostsArray: any[] = [];
    latestPostsArray: any[] = [];

  constructor(private postServices: PostsService) {}
    ngOnInit(): void {
    this.postServices.loadFeatured().subscribe((val) => {
      this.featuredPostsArray = val;
    });
    this.postServices.loadLatest().subscribe((val) => {
      this.latestPostsArray = val;
    });
  }
}
