import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nav = [
    { 
      name: 'Home',
      id: ''
    },
    { 
      name: 'Form Utilities',
      id: 'form'
    },
    { 
      name: 'Navigation Utility',
      id: 'nav'
    }
  ];
  
  constructor(private router: Router) {}

  changeRoute(event): void {
    this.router.navigate([event]);
  }
}
