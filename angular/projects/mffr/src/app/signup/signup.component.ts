import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  public errorMessage: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  signUp(event: any) {
    this.postSignup(event)
      .subscribe((data: any) => {
        this.errorMessage = data;
        console.log(data);
        this.loading = false;
      });
  }

  postSignup(event: any) {
    this.loading = true;
    let name = event.detail.email ? event.detail.email.replace('.', 'dot') : event.detail.email;
    return this.http.post<any>('https://us-central1-planavsky-com.cloudfunctions.net/app/user',
      { name: name,
        email: event.detail.email,
        email2: event.detail.email,
        pwd: event.detail.pwd1,
        pwd2: event.detail.pwd2
      }, this.httpOptions).pipe(
        catchError(this.handleError<any>('Please enter your login information.'))
      );
  }

  private handleError<T>(result?: T) {
    return (): Observable<T> => {
      return of(result as T);
    };
  }
}
