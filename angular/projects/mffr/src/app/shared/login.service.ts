import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { header } from '../shared/http/config';
import { AppState } from './../app.state';

@Injectable( { providedIn: 'root' } )
export class LoginService {
  public user: Observable<User[]>;

  constructor(private http: HttpClient,
    private store: Store<AppState>) {
      this.user = this.store.select(state => state.user);
    }

  addUser(email: string) {
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
}
