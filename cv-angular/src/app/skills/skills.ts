import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FilterSkillsPipe } from './filter-skills-pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, FilterSkillsPipe, CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})

export class SkillsComponent {
  // Inicializar la propiedad para el término de búsqueda.
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

}


