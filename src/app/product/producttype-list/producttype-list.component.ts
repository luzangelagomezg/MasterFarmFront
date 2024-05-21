import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { ProductService } from '../product-service.service';
import { IProductType } from '../../models/producttype';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producttype-list',
  templateUrl: './producttype-list.component.html',
  styleUrl: './producttype-list.component.css'
})
export class ProducttypeListComponent implements OnInit{
  
  data: IProductType[] = [];

  constructor(
    private productService:ProductService, 
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  ngOnInit(): void {
    this.getProductTypes();
  }

  getProductTypes(){
    this.productService.getProductTypes().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(producttypeID:number){
    console.log('Add Item');
    this.router.navigate(['producttypes', producttypeID]);
  }

  deleteItem(producttypeID:number)
  {
    console.log('Delete Item');
    this.productService.deleteProductType(producttypeID).subscribe({
      next: (res) => {
        console.log('Product Type Deleted');
        this.toastr.success('Product Type Deleted');
        this.getProductTypes();
      },
      error: (err) => {
        this.toastr.error('Product Type Not Deleted: ' + err.error, 'Error');
        console.log(err);
      }
    });
  }
}
