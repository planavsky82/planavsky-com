import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NavigationService]
})
export class HomeComponent {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public openModal: boolean = false;

  constructor(
    private navigation: NavigationService,
    private http: HttpClient) {
  }

  navigate(route: string) {
    this.navigation.navigate(route);
  }

  openSignup() {
    this.openModal = true;
  }

  closeSignup() {
    this.openModal = false;
  }
}
