import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sub } from '../models/sub';
import { SubscribersService } from '../servicers/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css',
})
export class SubscriptionFormComponent {

  isEmailError: boolean = false;
  isSubscribed:boolean = false;

  constructor(private subService: SubscribersService) {}
  async onSubmit(formVal: any) {
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email,
    };

    
    const val = await this.subService.checkSubs(subData.email);
    if(val){
      this.isEmailError = true;
      
    }
    else{
      this.subService.addSubs(subData);
      this.isSubscribed = true;
    }

  }
}
