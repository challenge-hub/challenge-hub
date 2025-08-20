import { Component, Input , OnInit} from '@angular/core';
import { DatePipe, NgIf } from "../../../../node_modules/@angular/common";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {

  @Input() postData: any;
  ngOnInit(): void {
    console.log('Post Data:', this.postData);
  }
}
