import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSkills'
})
export class FilterSkillsPipe implements PipeTransform {
  transform(skills: string[], searchTerm: string): string[] {
    if (!skills || !searchTerm) {
      return skills;
    }

    return skills.filter(skill =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}