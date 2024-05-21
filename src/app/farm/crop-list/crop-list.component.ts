import { Component, OnInit } from '@angular/core';
import { ICrop } from '../../models/crop';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrl: './crop-list.component.css'
})
export class CropListComponent implements OnInit {

  data: ICrop[] = [];

  constructor(
    private farmService:FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCrops();
  }

  getCrops(){
    this.farmService.getCrops().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(cropId:number){
    this.router.navigate(['crops', cropId]);
  }

  deleteItem(cropId:number)  {
    this.farmService.deleteCrop(cropId).subscribe({
      next: (res) => {
        console.log('Crop Deleted');        
        this.getCrops();
        this.toastr.success('Crop Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Crop Not Deleted: ' + err.error, 'Error');
      }
    });

  }
}
