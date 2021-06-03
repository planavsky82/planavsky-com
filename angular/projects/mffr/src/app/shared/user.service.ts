import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { header } from '../shared/http/config';
import { AppState } from './../app.state';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable( { providedIn: 'root' } )
export class UserService {
  public httpOptions = {
    headers: new HttpHeaders(header)
  };
  public user: Observable<User[]>;

  constructor(private http: HttpClient,
    private store: Store<AppState>,
    private router: Router) {
      this.user = this.store.select(state => state.user);
    }

  addUserState(email: string) {
    this.store.dispatch({
      type: 'ADD_USER',
      payload: <User> {
        name: email,
        pwd: 'active',
        admin: false,
        email: email,
        loggedIn: true
      }
    });
  }

  login(event: any) {
    let name = event.detail.email ? event.detail.email.replace('.', 'dot') : event.detail.email;
    return this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/authenticate',
      { name: name, pwd: event.detail.pwd }, this.httpOptions).pipe(
        map((data) => {
          if (data.success) {
            this.addUserState(event.detail.email);
            this.router.navigate(['/']);
          }
          return data;
        })
      );
  }

  logout() {
    this.store.dispatch({
      type: 'LOGOUT',
      payload: <User> {
        name: '',
        pwd: 'inactive',
        admin: false,
        email: '',
        loggedIn: false
      }
    });
  }

  getUserData() {
    return this.user.subscribe((name) => {
      return name[0];
    });
  }

  getRankings(data: any) {
    return this.http.get<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/rankings',
      { params: { 'token': data.token } });
  }
}
