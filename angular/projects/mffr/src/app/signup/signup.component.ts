import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { header } from '../shared/http/config';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public httpOptions = {
    headers: new HttpHeaders(header)
  };
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  signUp(event: any) {
    this.loading = true;
    let name = event.detail.email ? event.detail.email.replace('.', 'dot') : event.detail.email;
    this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/user',
      { name: name,
        email: event.detail.email,
        email2: event.detail.email,
        pwd: event.detail.pwd1,
        pwd2: event.detail.pwd2
      }, this.httpOptions)
      .subscribe((data: any) => {
        console.log(data);
        this.loading = false;
      });
  }
}
