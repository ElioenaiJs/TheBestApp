import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [ThemeButtonComponent, IonicModule, CommonModule, FormsModule, RouterLink]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
