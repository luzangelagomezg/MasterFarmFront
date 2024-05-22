import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(user: any) {
    if(this.form.valid) {
      this.authService.login(user.username, user.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.toastr.error('Invalid username or password');
      }
    });
    }
  }

}
