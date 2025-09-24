import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  searchTerm: string = '';

  technologies: string[] = [
    'Github',
    'Docker',
    'Postman',
    'AWS EC2',
    'Matplotlib'
  ];

  languages: string[] = [
    'Python',
    'Java',
    'C',
    'SQL'
  ];

  softSkills: string[] = [
    'Solución de problemas',
    'Pensamiento crítico',
    'Adaptabilidad y aprendizaje continuo',
    'Comunicación efectiva',
    'Trabajo en equipo y colaboración'
  ];

  // La lógica de filtrado se maneja con una pipe
}