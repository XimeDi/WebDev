import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // New: Import FormsModule here

// New: Import all the components you created
import { HeaderComponent } from './header/header';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule, 
    HeaderComponent, 
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'my-angular-cv';
  isDarkMode: boolean = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  printPage(): void {
    window.print();
  }
}