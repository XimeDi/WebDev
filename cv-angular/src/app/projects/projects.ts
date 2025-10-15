// projects/projects.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GitHubRepo } from './project-data.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  private readonly gitHubApiUrl = 'https://api.github.com/users/XimeDi/repos?sort=updated&per_page=6';

  // Almacena los repositorios
  projects: GitHubRepo[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.http.get<GitHubRepo[]>(this.gitHubApiUrl).subscribe({
      next: (data) => {
        // Filtra y mapea solo los datos necesarios 
        this.projects = data; 
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar proyectos de GitHub:', err);
        this.error = 'No se pudieron cargar los proyectos. Revisa tu nombre de usuario de GitHub.';
        this.isLoading = false;
      }
    });
  }
}