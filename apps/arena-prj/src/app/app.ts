import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomApp } from '../custom-app/form-select.component';

@Component({
  standalone: true,
  imports: [RouterModule, CustomApp],

  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
