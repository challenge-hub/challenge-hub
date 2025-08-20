import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css',
})
export class CategoryNavbarComponent {
  categoryArray: any[] = [];
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(
      (val) => {
        this.categoryArray = val;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
}
