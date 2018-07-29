import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NavigationService]
})
export class HomeComponent {
  constructor(private navigation: NavigationService) {}

  navigate() {
    this.navigation.navigate('main');
  }

}
