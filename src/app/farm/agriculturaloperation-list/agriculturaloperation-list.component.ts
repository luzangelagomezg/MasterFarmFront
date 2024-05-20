import { Component, OnInit } from '@angular/core';
import { AgriculturalOperation } from '../../models/agriculturaloperation';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agriculturaloperation-list',
  templateUrl: './agriculturaloperation-list.component.html',
  styleUrl: './agriculturaloperation-list.component.css'
})
export class AgriculturaloperationListComponent implements OnInit{

  data: AgriculturalOperation[] = [];

  constructor(
    private farmService:FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAgriculturalOperations();
  }

  getAgriculturalOperations(){
    this.farmService.getAgriculturalOperations().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(agriculturalOperationId:number){
    this.router.navigate(['agriculturaloperations', agriculturalOperationId]);
  }

  deleteItem(agriculturalOperationId:number)  {
    this.farmService.deleteAgriculturalOperation(agriculturalOperationId).subscribe({
      next: (res) => {
        console.log('Agricultural Operation Deleted');        
        this.getAgriculturalOperations();
        this.toastr.success('Agricultural Operation Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Agricultural Operation Not Deleted: ' + err.error, 'Error');
      }
    });

  }

}
