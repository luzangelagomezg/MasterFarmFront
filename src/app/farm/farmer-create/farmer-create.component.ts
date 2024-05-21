import { Component, OnInit } from '@angular/core';
import { IFarmer } from '../../models/Farmer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmer-create',
  templateUrl: './farmer-create.component.html',
  styleUrl: './farmer-create.component.css'
})
export class FarmerCreateComponent implements OnInit{

  form!: FormGroup;
  id!: number | null;
  farmer!: IFarmer;  

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstNameFarmer: [''],
      lastNameFarmer: [''],
      emailFarmer: [''],
      phoneFarmer: [''],
      addressFarmer: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getFarmer(this.id).subscribe(farmer => {
          if(farmer){
            this.farmer = farmer;
            this.form.patchValue(farmer);
          }
        });
      }
    });
  }

  onSubmit(newFarmer: IFarmer){
    console.log(newFarmer);
    if(this.farmer){
      this.updateFarmer(newFarmer);
    }else{
      this.createNewFarmer(newFarmer);
    }
  }

  updateFarmer(newFarmer: IFarmer) {
    newFarmer.id = this.farmer.id;
    this.farmService.updateFarmer(newFarmer).subscribe({
      next: (res) => {
        this.toastr.success('Farmer updated successfully');
      },
      error: (err) => {
        this.toastr.error('Error updating farmer '+err.message);
      }
    });
  }

  createNewFarmer(newFarmer: IFarmer) {
    this.farmService.createFarmer(newFarmer).subscribe({
      next: (res) => {
        this.form.reset();
        this.toastr.success('Farmer created successfully');
      },
      error: (err) => {
        this.toastr.error('Error creating farmer '+err.message);
      }      
    });
  }
  
}
