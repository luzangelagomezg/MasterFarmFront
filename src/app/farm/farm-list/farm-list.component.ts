import { Component } from '@angular/core';
import { IFarm } from '../../models/farm';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrl: './farm-list.component.css'
})
export class FarmListComponent {

  data: IFarm[] = []; 

  constructor(
    private farmService: FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getFarms();
  }

  getFarms() {
    this.farmService.getFarms().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(id: number) {
    console.log(id);
    this.router.navigate(['/farms', id]);
  }

  deleteItem(id: number) {
    this.farmService.deleteFarm(id).subscribe({
      next: (res) => {
        console.log('Farm Deleted');
        this.getFarms();
        this.toastr.success('Farm Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Farm Not Deleted: ' + err.error, 'Error');
      }
    });
  }

}
