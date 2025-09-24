import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSkills',
  standalone: true // Asumiendo que usas componentes/pipes standalone
})
export class FilterSkillsPipe implements PipeTransform {
  transform(skills: string[], searchTerm: string): string[] {
    if (!skills || !searchTerm) {
      return skills;
    }

    // Filtrar skills que incluyen el término de búsqueda (case-insensitive)
    return skills.filter(skill =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}