import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData = [
    {
      year: '2021-Actualidad',
      institution: 'Universidad Francisco Marroquín',
      title: 'Baccalaureus Scientiae y Licenciado en Ingeniería en Ciencias de la Computación con especialización en Ciencia de los Datos'
    },
    {
      year: '2020',
      institution: 'Centro de Estudios Americano CEA y Kinder Mundo',
      title: 'Bachiller en Ciencias y Letras'
    }
  ];
}