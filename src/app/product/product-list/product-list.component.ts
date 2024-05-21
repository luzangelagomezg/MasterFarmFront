import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { IProduct } from '../../models/product';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  data: IProduct[] = [];

  constructor(
    private productService:ProductService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(productId:number){
    this.router.navigate(['products', productId]);
  }

  deleteItem(productId:number)
  {
    this.productService.deleteProduct(productId).subscribe({
      next: (res) => {
        console.log('Product Deleted');        
        this.getProducts();
        this.toastr.success('Product Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Product Not Deleted: ' + err.error, 'Error');
      }
    });
  }
}
