import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  signUp(event: any) {
    this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/user',
      { name: 'eeeeeeeeeee11223344554r',
        email: 'eerrre33@gmail.com',
        email2: 'eerrre33@gmail.com',
        pwd: 'e3$f!rt78UNml90!',
        pwd2: 'e3$f!rt78UNml90!'
      }, this.httpOptions)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
