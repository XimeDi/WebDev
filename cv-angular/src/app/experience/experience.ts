import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Experience } from './experience-data.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
  imports: [FormsModule, CommonModule],
})

export class ExperienceComponent implements OnInit { // Implementar OnInit
  // URL de la API de experiencias
  private readonly apiUrl = 'http://localhost:3001/experiences';

  showExperience: boolean = true;
  // Cambiamos el tipo de dato a un array de la interfaz Experience y lo inicializamos vacío
  experience: Experience[] = []; 
  
  // Inyectar HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // Usar ngOnInit para cargar los datos al iniciar el componente
  ngOnInit(): void {
    this.loadExperiences();
  }

  // Método para obtener los datos de la API
  loadExperiences(): void {
    // El método .get() de HttpClient retorna un Observable.
    // Usar .subscribe() para manejar la respuesta.
    this.http.get<Experience[]>(this.apiUrl).subscribe({
      next: (data) => {
        // Asignar los datos obtenidos de la API a la propiedad experience
        this.experience = data;
        console.log('Experiencias cargadas:', data);
      },
      error: (err) => {
        // Manejo de errores (por si la API no está corriendo o hay un problema)
        console.error('Error al cargar la experiencia laboral desde la API:', err);
      }
    });
  }

  toggleExperience() {
    this.showExperience = !this.showExperience; 
  }
}