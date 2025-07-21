import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
})
export class Button {
  label = input<string>();
  clicked = output<string>();

  handleClick(): any {
    this.clicked.emit('clicked');
  }
}
