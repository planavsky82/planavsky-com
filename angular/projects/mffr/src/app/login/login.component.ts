import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  login(event: any) {
    // name: 'U10133', pwd: 'e3$f!rt78UNml90!'
    this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/authenticate',
      { name: event.detail.email, pwd: event.detail.pwd }, this.httpOptions)
      .subscribe((data: any) => {
        this.http.get<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/rankings',
        { params: { 'token': data.token } })
        .subscribe((data: any) => console.log(data));
      });
  }
}
