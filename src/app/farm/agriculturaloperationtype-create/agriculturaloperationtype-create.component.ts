import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAgriculturalOperationType } from '../../models/agriculturaloperationtype';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agriculturaloperationtype-create',
  templateUrl: './agriculturaloperationtype-create.component.html',
  styleUrl: './agriculturaloperationtype-create.component.css'
})
export class AgriculturaloperationtypeCreateComponent implements OnInit{


form!: FormGroup;
id!:  number | null;
agriculturalOperationType!: IAgriculturalOperationType;

constructor(
  private formBuilder: FormBuilder,
  private farmService: FarmService,
  private toastr: ToastrService,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  this.form = this.formBuilder.group({
    type: ['']
  });

  this.route.params.subscribe(params => {
    this.id = params['id'];

    if(this.id !== 0 && this.id !== null){
      this.farmService.getAgriculturalOperationType(this.id).subscribe(agriculturalOperationType => {
        if(agriculturalOperationType){
          this.agriculturalOperationType = agriculturalOperationType;
          this.form.patchValue(agriculturalOperationType);
        }
      });
    }
  });
}

onSubmit(newAgriculturalOperationType: IAgriculturalOperationType){
  console.log(newAgriculturalOperationType);
  if(this.agriculturalOperationType){
    this.updateAgriculturalOperationType(newAgriculturalOperationType);
  }else{
    this.createNewAgriculturalOperationType(newAgriculturalOperationType);
  }

}createNewAgriculturalOperationType(newAgriculturalOperationType: IAgriculturalOperationType) {
    this.farmService.createAgriculturalOperationType(newAgriculturalOperationType).subscribe({
      next: (res) => {
        this.toastr.success('Agricultural Operation Type Created successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error creating Agricultural Operation Type ');
      }
    });
  }
  updateAgriculturalOperationType(newAgriculturalOperationType: IAgriculturalOperationType) {
    newAgriculturalOperationType.id = this.agriculturalOperationType.id;
    this.farmService.updateAgriculturalOperationType(newAgriculturalOperationType).subscribe({
      next: (res) => {
        this.toastr.success('Agricultural Operation Type Updated successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error updating Agricultural Operation Type ');
      }
    });
  }
}
