import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { ProductService } from '../product-service.service';
import { IProductType } from '../../models/producttype';

@Component({
  selector: 'app-producttype-list',
  templateUrl: './producttype-list.component.html',
  styleUrl: './producttype-list.component.css'
})
export class ProducttypeListComponent implements OnInit{
  
  data: IProductType[] = [];

  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
    this.getProductTypes();
  }

  getProductTypes(){
    this.productService.getProductTypes().subscribe(data => {
      this.data = data;
    });
  }
}
