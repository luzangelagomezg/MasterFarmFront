import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  data: IProduct[] = [];

  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.data = data;
    });
  }

}
