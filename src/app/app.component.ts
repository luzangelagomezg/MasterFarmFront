import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'masterfarmfront';
  showMenu = true;

  constructor(private router: Router,private authService: AuthService) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = event.url !== '/login';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
