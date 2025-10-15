// projects/project-data.model.ts

export interface GitHubRepo {
  id: number;
  name: string; // Nombre del repo
  html_url: string; // Link al repositorio
  stargazers_count: number; // Estrellas
  description: string | null; // Descripción
}