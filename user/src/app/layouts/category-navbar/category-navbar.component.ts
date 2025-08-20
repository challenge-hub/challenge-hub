import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-category-navbar',
  standalone: true,
imports: [RouterLink, CommonModule],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css',
})
export class CategoryNavbarComponent implements OnInit{
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
