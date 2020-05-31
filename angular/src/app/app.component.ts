import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nav = [
    { 
      name: 'Nav Item #1',
      id: ''
    },
    { 
      name: 'Nav Item #2',
      id: 'form'
    },
    { 
      name: 'Nav Item #3',
      id: 'nav'
    }
  ];
}
