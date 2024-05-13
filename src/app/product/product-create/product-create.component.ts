import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from '../../models/product';
import { ProductService } from '../product-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IProductType } from '../../models/producttype';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{

  form!: FormGroup;
  id!: number | null;
  product!: IProduct;
  productTypes: IProductType[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      productTypeId: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.productService.getProduct(this.id).subscribe(product => {
          if(product){
            this.product = product;
            this.form.patchValue(product);
          }
        });
      }
    });

    this.getProductTypes();
  }

  onSubmit(newProduct: IProduct){
    console.log(newProduct);
    if(this.product){
      this.updateProduct(newProduct);
    }else{
      this.createNewProduct(newProduct);
    }
  }

  private updateProduct(newProduct: IProduct) {
    newProduct.id = this.product.id;
    this.productService.updateProduct(newProduct).subscribe({
      next: (res) => {
        console.log('Product Updated');
        this.toastr.success('Product Updated');
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Product Update Failed');
      }
    });
  }

  private createNewProduct(newProduct: IProduct) {
    this.productService.createProduct(newProduct).subscribe({
      next: (res) => {
        console.log('Product Created');
        this.toastr.success('Product Created');
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Product Creation Failed');
      }
    });
  }

  private getProductTypes() {
    this.productService.getProductTypes().subscribe(productTypes => {
      this.productTypes = productTypes.filter(productType => productType.is_active);;
    });
  }
}
