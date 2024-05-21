import { Component, OnInit } from '@angular/core';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAgriculturalOperationType } from '../../models/agriculturaloperationtype';

@Component({
  selector: 'app-agriculturaloperationtype-list',
  templateUrl: './agriculturaloperationtype-list.component.html',
  styleUrl: './agriculturaloperationtype-list.component.css'
})
export class AgriculturaloperationtypeListComponent implements OnInit{

  data: IAgriculturalOperationType[] = [];

  constructor(
    private farmService: FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAgriculturalOperationTypes();
  }

  getAgriculturalOperationTypes(){
    this.farmService.getAgriculturalOperationTypes().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(id: number){
    this.router.navigate(['/agriculturaloperationtypes', id]);
  }

  deleteItem(id: number)  {
    this.farmService.deleteAgriculturalOperationTypes(id).subscribe({
      next: () => {      
        this.getAgriculturalOperationTypes();
        this.toastr.success('Agricultural Operation Type deleted successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error deleting Agricultural Operation Type ');
      }
    });

  }

}
