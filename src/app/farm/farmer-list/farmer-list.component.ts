import { Component } from '@angular/core';
import { IFarmer } from '../../models/Farmer';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrl: './farmer-list.component.css'
})
export class FarmerListComponent {

  data: IFarmer[] = [];

  constructor(
    private farmService: FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getFarmers();
  }

  getFarmers() {
    this.farmService.getFarmers().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(id: number) {
    console.log(id);
    this.router.navigate(['/farmers', id]);
  }

  deleteItem(id: number) {
    this.farmService.deleteFarmer(id).subscribe({
      next: () => {
        this.getFarmers();
        this.toastr.success('Farmer deleted successfully');
      },
      error: (err) => {
        this.toastr.error('Error deleting farmer');
      }
    });
  }

}
