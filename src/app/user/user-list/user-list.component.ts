import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  data: IUser[] = [];

  constructor(
    private userService:UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(userId:number){
    this.router.navigate(['users', userId]);
  }

  deleteItem(userId:number)  {
    this.userService.deleteUser(userId).subscribe({
      next: (res) => {
        console.log('User Deleted');        
        this.getUsers();
        this.toastr.success('User Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('User Not Deleted: ' + err.error, 'Error');
      }
    });

  }

}
