import { Component, OnInit } from '@angular/core';
import { IAgriculturalOperationType } from '../../models/agriculturaloperationtype';
import { ICrop } from '../../models/crop';
import { IAgriculturalOperation } from '../../models/agriculturaloperation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agriculturaloperation-create',
  templateUrl: './agriculturaloperation-create.component.html',
  styleUrl: './agriculturaloperation-create.component.css'
})
export class AgriculturaloperationCreateComponent implements OnInit {

  crops: ICrop[] = [];
  operationTypes: IAgriculturalOperationType[] = [];
  form!: FormGroup;
  id!: number | null;
  AgriculturalOperation!: IAgriculturalOperation;

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      cropId: [''],
      operationTypeId: [''],
      dateOperation: [''],
      description: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getAgriculturalOperation(this.id).subscribe(agriculturalOperation => {
          if(agriculturalOperation){
            this.AgriculturalOperation = agriculturalOperation;
            this.form.patchValue(agriculturalOperation);
          }
        });
      }
    });

    this.getCrops();
    this.getAgriculturalOperationTypes();
  }

  onSubmit(newAgriculturalOperation: IAgriculturalOperation){
    console.log(newAgriculturalOperation);
    if(this.AgriculturalOperation){
      this.updateAgriculturalOperation(newAgriculturalOperation);
    }else{
      this.createNewAgriculturalOperation(newAgriculturalOperation);
    }
  }

  updateAgriculturalOperation(newAgriculturalOperation: IAgriculturalOperation) {
    newAgriculturalOperation.id = this.AgriculturalOperation.id;
    this.farmService.updateAgriculturalOperation(newAgriculturalOperation).subscribe({
      next: (res) => {
        console.log('Agricultural Operation Updated');
        this.toastr.success('Agricultural Operation Updated');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Agricultural Operation Not Updated: ' + err.error, 'Error');
      }
    });
  }

  createNewAgriculturalOperation(newAgriculturalOperation: IAgriculturalOperation) {
    this.farmService.createAgriculturalOperation(newAgriculturalOperation).subscribe({
      next: (res) => {
        console.log('Agricultural Operation Created');
        this.toastr.success('Agricultural Operation Created');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Agricultural Operation Not Created: ' + err.error, 'Error');
      }
    });
  }

  getCrops(){
    this.farmService.getCrops().subscribe(data => {
      this.crops = data.filter(crop => crop.is_active === true);
    });
  }

  getAgriculturalOperationTypes(){
    this.farmService.getAgriculturalOperationTypes().subscribe(data => {
      this.operationTypes = data.filter(operationType => operationType.is_active === true);
    });
  }

}
