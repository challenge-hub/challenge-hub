import { Component } from '@angular/core';
import { SubscriptionFormComponent } from "../../subscription-form/subscription-form.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SubscriptionFormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
