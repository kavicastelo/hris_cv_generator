import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from './services/theme.service';
import {NgClass} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'talentboozt_cv_generator';

  constructor(public themeService: ThemeService) {
  }
}
