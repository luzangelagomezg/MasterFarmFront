import { Component } from '@angular/core';
import { IFarmer } from '../../models/Farmer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../../models/user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../../farm/farm.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {  
  farmers: IFarmer[] = [];
  form!: FormGroup;
  id!: number | null;
  User!: IUser;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: [''],
      password: [''],
      farmerId: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.userService.getUser(this.id).subscribe(user => {
          if(user){
            this.User = user;
            this.form.patchValue(user);
          }
        });
      }
    });

    this.getFarmers();
  }

  onSubmit(newUser: IUser){
    if(this.User){
      this.updateUser(newUser);
    }else{
      this.createNewUser(newUser);
    }
  }

  updateUser(newUser: IUser) {
    newUser.id = this.User.id;
    this.userService.updateUser(newUser).subscribe({
      next: (res) => {
        console.log('User Updated');
        this.toastr.success('User Updated');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('User Not Updated: ' + err.error, 'Error');
      }
    });
  }

  createNewUser(newUser: IUser) {
    this.userService.createUser(newUser).subscribe({
      next: (res) => {
        console.log('User Created');
        this.toastr.success('User Created');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('User Not Created: ' + err.error, 'Error');
      }
    });
  }


  getFarmers(){
    this.farmService.getFarmers().subscribe(data => {
      this.farmers = data;
    });
  }
  
}
