import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';
import { header } from '../shared/http/config';
import { AppState } from './../app.state';
import { UserService } from '../shared/user.service';

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
    private userService: UserService) {
      this.user = this.store.select(state => state.user);
    }

  ngOnInit() {}

  login(event: any) {
    // name: 'U10133', pwd: 'e3$f!rt78UNml90!'
    this.loading = true;
    this.userService.login(event).subscribe((data: any) => {
      if (!data.success) {
        this.errorMessage = data.message;
      }
      this.loading = false;
    });
  }
}
