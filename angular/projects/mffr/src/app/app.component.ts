import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Navigation } from '@models/navigation';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public timeoutId: any;
  public targetOn: boolean = true;
  public navigation: Navigation;
  public route: string;
  public user: User;
  public username$: Observable<User[]>;

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private store: Store<AppState>) {
      router.events.subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.route = event.url;
        }
    });
  }

  ngOnInit() {
    this.animateTarget(4000);
    this.navigation = [
      {
        route: '',
        name: 'Home',
        secure: false
      },
      {
        route: 'login',
        name: 'Login',
        secure: false
      },
      {
        route: 'signup',
        name: 'Sign Up',
        secure: false
      },
      {
        route: 'main',
        name: 'Profile',
        secure: true
      },
      {
        route: 'rankings',
        name: 'Rankings',
        secure: true
      }
    ];

    this.username$ = this.store.select(state => state.user);
    this.username$.subscribe(name => this.user = name[0]);
  }

  animateTarget(time: number) {
    let target = this.elementRef.nativeElement.querySelector('.fantasy-football');
    let timeNew;

    this.timeoutId = setTimeout(() => {

      switch(time) {
        case 4000:
          timeNew = 100;
          break;
        case 100:
          timeNew = 80;
          break;
        case 80:
          timeNew = 4500;
          break;
        case 4500:
          timeNew = 35;
          break;
        case 35:
          timeNew = 110;
          break;
        case 110:
          timeNew = 0;
          break;
      }

      this.targetOn = !this.targetOn;
      !this.targetOn ? this.renderer.addClass(target, "blue-highlight-on") : this.renderer.removeClass(target, "blue-highlight-on");
      if (timeNew !== 0) {
        this.animateTarget(timeNew);
      }
    }, time);
  }

  navigate(event: any) {
    this.router.navigate([event.detail.route]);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

}
