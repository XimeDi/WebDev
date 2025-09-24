import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  greeting: string = '';

  ngOnInit(): void {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      this.greeting = '¡Buenos días!';
    } else if (hour >= 12 && hour < 19) {
      this.greeting = '¡Buenas tardes!';
    } else {
      this.greeting = '¡Buenas noches!';
    }
  }
}