import { Router }  from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate(['/' + route]);
  }

}