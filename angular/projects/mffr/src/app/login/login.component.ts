import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';
import { header } from '../shared/http/config';
import { AppState } from './../app.state';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public httpOptions = {
    headers: new HttpHeaders(header)
  };
  public loading: boolean = false;
  public user: Observable<User[]>;
  public errorMessage: string;

  constructor(private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
    private loginService: LoginService,) {
      this.user = this.store.select(state => state.user);
    }

  ngOnInit() {}

  addUser(email: string) {
    this.loginService.addUser(email);
  }

  login(event: any) {
    this.loading = true;
    // name: 'U10133', pwd: 'e3$f!rt78UNml90!'
    let name = event.detail.email ? event.detail.email.replace('.', 'dot') : event.detail.email;
    this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/authenticate',
      { name: name, pwd: event.detail.pwd }, this.httpOptions)
      .subscribe((data: any) => {
        if (data.success) {
          this.addUser(event.detail.email);
          this.router.navigate(['/']);
        }
        this.http.get<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/rankings',
        { params: { 'token': data.token } })
        .subscribe((data: any) => {
          if (!data.succes) {
            this.errorMessage = data.message;
          }
          console.log(data);
          this.loading = false;
        });
      });
  }
}
