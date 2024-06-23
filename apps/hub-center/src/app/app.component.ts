import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  NavigationSkipped,
} from '@angular/router';

@Component({
  selector: 'adv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ADV Center';
  loadingNavigate = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listenRouterEvent();
  }

  listenRouterEvent(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingNavigate = true;
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError ||
        event instanceof NavigationSkipped
      ) {
        this.loadingNavigate = false;
      }
    });
  }
}
