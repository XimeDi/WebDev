import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import all the components created
import { HeaderComponent } from './header/header';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';


import { FilterSkillsPipe } from './skills/filter-skills-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule, 
    HttpClientModule, 
    HeaderComponent, 
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    FilterSkillsPipe
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