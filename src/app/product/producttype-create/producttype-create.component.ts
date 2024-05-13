import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { ProductService } from '../product-service.service';
import { IProductType } from '../../models/producttype';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producttype-create',
  templateUrl: './producttype-create.component.html',
  styleUrl: './producttype-create.component.css'
})
export class ProducttypeCreateComponent implements OnInit {

  form!: FormGroup; 
  id!: number | null;
  productType!: IProductType;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      productType: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.productService.getProductType(this.id).subscribe(productType => {
          if(productType){
            this.productType = productType;
            this.form.patchValue(productType);
          }
        });
      }
    });
  }

  onSubmit(newProductType: IProductType){
    console.log(newProductType);
    if(this.productType){
      this.updateProductType(newProductType);
    }else{
      this.createNewProductType(newProductType);
    }
  }

  private updateProductType(newProductType: IProductType) {
    newProductType.id = this.productType.id;
    this.productService.updateProductType(newProductType).subscribe({
      next: (res) => {
        console.log('Product Type Updated');
        this.toastr.success('Product Type Updated');
        this.form.reset();
      },
      error: (err) => {
        console.error('Error:', err);
        this.toastr.error('Error' + err.message);
      }
    });
  }

  private createNewProductType(newProductType: IProductType) {
    this.productService.createProductType(newProductType).subscribe({
      next: (res) => {
        console.log('Product Type Created');
        this.toastr.success('Product Type Created');
        this.form.reset();
      },
      error: (err) => {
        console.error('Error:', err);
        this.toastr.error('Error' + err.message);
      }
    });
  }
}
