import { Component, OnInit } from '@angular/core';
import { IFarm } from '../../models/farm';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFarmer } from '../../models/Farmer';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrl: './farm-create.component.css'
})
export class FarmCreateComponent implements OnInit{

  form!: FormGroup;
  id!: number | null;
  farm!: IFarm;
  farmers: IFarmer[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      farmName: [''],
      farmerId: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getFarm(this.id).subscribe(farm => {
          if(farm){
            this.farm = farm;
            this.form.patchValue(farm);
          }
        });
      }
    });

    this.getFarmers();
  }

  onSubmit(newFarm: IFarm){
    console.log(newFarm);
    if(this.farm){
      this.updateFarm(newFarm);
    }else{
      this.createNewFarm(newFarm);
    }
  }

  private updateFarm(newFarm: IFarm) {
    newFarm.id = this.farm.id;
    this.farmService.updateFarm(newFarm).subscribe({
      next: () => {
        this.toastr.success('Farm updated successfully');
      },
      error: (err) => {
        this.toastr.error('An error occurred');
      }
    });
  }

  private getFarmers() {
    this.farmService.getFarmers().subscribe(farmers => {
      this.farmers = farmers;
    });
  }

  private createNewFarm(newFarm: IFarm) {
    this.farmService.createFarm(newFarm).subscribe({
      next: () => {
        this.toastr.success('Farm created successfully');
        this.form.reset();
      },
      error: (err) => {
        this.toastr.error('An error occurred');
      }
    });
  }
}
