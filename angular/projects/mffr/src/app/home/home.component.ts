import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NavigationService]
})
export class HomeComponent {
  constructor(
    private navigation: NavigationService,
    private http: HttpClient) {
    this.getConfig();
  }

  navigate() {
    this.navigation.navigate('main');
  }

  getConfig() {
    console.log(this.http.get<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/user')
      .subscribe((data: any) => console.log(data)));
  }
}
