import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private userService: UserService) { }



  login(username: string, password: string) {
    return this.userService.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.userName === username && u.password === password);
        if (user) {
          this.isAuthenticated = true;
          return true;
        } else {
          return false;
        }
      })
    );
  }
  logout() {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}



