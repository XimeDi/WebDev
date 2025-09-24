import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  showExperience: boolean = true;

  experience = [
    { period: 'Agosto 2025 - Noviembre 2025', company: 'ES Consulting', position: 'Practicante' },
    { period: 'Mar 2024 - Jun 2024', company: 'Tech Solutions Inc.', position: 'Asistente de Desarrollo' }
  ];

  toggleExperience() {
    this.showExperience = !this.showExperience;
  }
}