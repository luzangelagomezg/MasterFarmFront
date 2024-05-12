import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttypeListComponent } from './producttype-list/producttype-list.component';
import { ProducttypeCreateComponent } from './producttype-create/producttype-create.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [ProducttypeListComponent,ProducttypeCreateComponent, ProductListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
