import { Component, Input , OnInit} from '@angular/core';
import { CommonModule, DatePipe, NgIf } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [NgIf, DatePipe, CommonModule, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {

  @Input() postData: any;
  ngOnInit(): void {
    console.log('Post Data:', this.postData);
  }
}
