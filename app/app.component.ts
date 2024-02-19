import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isAdminRoute = false;
  public sub!: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkRoute();
  }

  checkRoute(): void {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isAdminRoute = this.router.url.includes('/admin');
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
