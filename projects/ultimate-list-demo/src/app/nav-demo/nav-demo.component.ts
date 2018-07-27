import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ultimate-nav-demo',
  templateUrl: './nav-demo.component.html',
  styleUrls: ['./nav-demo.component.scss']
})
export class NavDemoComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
