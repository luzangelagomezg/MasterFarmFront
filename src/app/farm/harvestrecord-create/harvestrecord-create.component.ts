import { Component } from '@angular/core';
import { IAgriculturalOperation } from '../../models/agriculturaloperation';
import { IProduct } from '../../models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IHarvestRecord } from '../../models/harvestrecord';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/product-service.service';

@Component({
  selector: 'app-harvestrecord-create',
  templateUrl: './harvestrecord-create.component.html',
  styleUrl: './harvestrecord-create.component.css'
})
export class HarvestrecordCreateComponent {

  operations: IAgriculturalOperation[] = [];
  products: IProduct[] = [];
  form!: FormGroup;
  id!: number | null;
  HarvestRecord!: IHarvestRecord;
  
  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private productService: ProductService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateHarvest: [''],
      quantity: [''],
      productId: [''],
      operationId: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getHarvestRecord(this.id).subscribe(harvestRecord => {
          if(harvestRecord){
            this.HarvestRecord = harvestRecord;
            this.form.patchValue(harvestRecord);
          }
        });
      }
    });

    this.getOperations();
    this.getProducts();
  }

  onSubmit(newHarvestRecord: IHarvestRecord){
    console.log(newHarvestRecord);
    if(this.HarvestRecord){
      this.updateHarvestRecord(newHarvestRecord);
    }else{
      this.createNewHarvestRecord(newHarvestRecord);
    }
  }

  updateHarvestRecord(newHarvestRecord: IHarvestRecord) {
    newHarvestRecord.id = this.HarvestRecord.id;
    this.farmService.updateHarvestRecord(newHarvestRecord).subscribe({
      next: (res) => {
        console.log('Harvest Record Updated');
        this.toastr.success('Harvest Record Updated');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Harvest Record Not Updated: ' + err.error, 'Error');
      }
    });
  }
  createNewHarvestRecord(newHarvestRecord: IHarvestRecord) {
    this.farmService.createHarvestRecord(newHarvestRecord).subscribe({
      next: (res) => {
        console.log('Harvest Record Created');
        this.toastr.success('Harvest Record Created');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Harvest Record Not Created: ' + err.error, 'Error');
      }
    });
  }

  getOperations(){
    this.farmService.getAgriculturalOperations().subscribe(data => {
      this.operations = data.filter(operation => operation.is_active === true);
    });
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data.filter(product => product.is_active === true);
    });
  }

}
