import { Component } from '@angular/core';
import { Button } from 'shared/button/buttoncomponent';

@Component({
  imports: [Button],
  selector: 'custom-app-form',
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
})
export class CustomApp {
  handleClick(event: string) {
    console.log(event);
  }
}
