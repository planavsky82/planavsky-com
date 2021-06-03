import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service'
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NavigationService]
})
export class HomeComponent {
  public openModal: boolean = false;

  constructor(
    private navigation: NavigationService,
    private userService: UserService) {

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
