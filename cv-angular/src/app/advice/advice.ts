// src/app/advice/advice.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdviceSlip } from './advice-data.model';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './advice.html',
  styleUrls: ['./advice.css']
})
export class AdviceComponent implements OnInit {
  private readonly apiUrl = 'https://api.adviceslip.com/advice';
  
  adviceQuote: string = 'Cargando un consejo profesional...';
  isLoading: boolean = true;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAdvice();
  }

  fetchAdvice(): void {
    this.http.get<AdviceSlip>(this.apiUrl).subscribe({
      next: (data) => {
        this.adviceQuote = data.slip.advice;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching advice:', err);
        this.adviceQuote = 'No se pudo cargar el consejo. ¡Sigue adelante!';
        this.isLoading = false;
      }
    });
  }
}