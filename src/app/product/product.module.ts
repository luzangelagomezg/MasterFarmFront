import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttypeListComponent } from './producttype-list/producttype-list.component';
import { ProducttypeCreateComponent } from './producttype-create/producttype-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductCreateComponent } from './product-create/product-create.component';



@NgModule({
  declarations: [ProducttypeListComponent,ProducttypeCreateComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
