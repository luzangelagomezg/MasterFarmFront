import { Component, OnInit } from '@angular/core';
import { IPlot } from '../../models/plot';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICrop } from '../../models/crop';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crop-create',
  templateUrl: './crop-create.component.html',
  styleUrl: './crop-create.component.css'
})
export class CropCreateComponent implements OnInit {

  plots: IPlot[] = [];
  form!: FormGroup;
  id!: number | null;
  Crop!: ICrop;
  
  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      harvestDays: [''],
      plotId: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getCrop(this.id).subscribe(crop => {
          if(crop){
            this.Crop = crop;
            this.form.patchValue(crop);
          }
        });
      }
    });

    this.getPlost();
  }

  onSubmit(newCrop: ICrop){
    console.log(newCrop);
    if(this.Crop){
      this.updateCrop(newCrop);
    }else{
      this.createNewCrop(newCrop);
    }
  }

  updateCrop(newCrop: ICrop) {
    newCrop.id = this.Crop.id;
    this.farmService.updateCrop(newCrop).subscribe({
      next: (res) => {
        console.log('Crop Updated');
        this.toastr.success('Crop Updated');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Crop Not Updated: ' + err.error, 'Error');
      }
    });
  }

  createNewCrop(newCrop: ICrop) {
    this.farmService.createCrop(newCrop).subscribe({
      next: (res) => {
        console.log('Crop Created');
        this.toastr.success('Crop Created');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Crop Not Created: ' + err.error, 'Error');
      }
    });
  }

  getPlost(){
    this.farmService.getPlots().subscribe(data => {
      this.plots = data.filter(plot => plot.is_active === true);
    });
  }

}
