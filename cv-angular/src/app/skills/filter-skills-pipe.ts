import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSkills',
  standalone: true 
})

export class FilterSkillsPipe implements PipeTransform {
/**
   * Filtra un array de strings basado en un término de búsqueda.
   *
   * @param items Array de strings a filtrar (ej. 'technologies', 'languages').
   * @param searchTerm Término de búsqueda. Si es nulo o vacío, devuelve todos los items.
   * @returns Array de strings filtrado.
   */

  transform(items: string[] | null | undefined, searchTerm: string = ''): string[] {
    // Si la lista es nula, indefinida o el término de búsqueda está vacío,
    // se retorna la lista original.
    if (!items || searchTerm.trim() === '') {
      return items || [];
    }

    // Normalizar el término de búsqueda a minúsculas y quitar espacios
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    // Filtrar los elementos
    return items.filter(item => {
      return item.toLowerCase().includes(lowerCaseSearchTerm);
    });
  }
}