import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

  constructor(
    private navigation: NavigationService,
    private http: HttpClient) {
    this.getConfig();
  }

  navigate() {
    this.navigation.navigate('main');
  }

  getConfig() {
    console.log(this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/authenticate',
      { name: 'U10133', pwd: 'e3$f!rt78UNml90!' }, this.httpOptions)
      .subscribe((data: any) => {
        console.log(data.token);
        console.log(this.http.get<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/rankings',
        { params: { 'token': data.token } })
        .subscribe((data: any) => console.log(data)));
      }));
  }
}
