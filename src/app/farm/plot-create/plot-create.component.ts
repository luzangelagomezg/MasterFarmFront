import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPlot } from '../../models/plot';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IPlotType } from '../../models/plottype';
import { IFarm } from '../../models/farm';

@Component({
  selector: 'app-plot-create',
  templateUrl: './plot-create.component.html',
  styleUrl: './plot-create.component.css'
})
export class PlotCreateComponent implements OnInit{

  form!: FormGroup;
  id!:  number | null;
  plot!: IPlot;
  plotTypes: IPlotType[] = [];
  farms: IFarm[] = [];
  farm: any;

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }
  
      ngOnInit(): void {
        this.form = this.formBuilder.group({
          number: [''],
          farmId: [''],
          plotTypeId: [''],
        });
  
        this.route.params.subscribe(params => {
          this.id = params['id'];
  
          if(this.id !== 0 && this.id !== null){
            this.farmService.getPlot(this.id).subscribe(plot => {
              if(plot){
                this.plot = plot;
                this.form.patchValue(plot);
              }
            });
          }
        });

        this.getFarms(); 
        this.getPlotTypes();
      }


  onSubmit(newPlot: IPlot){
    console.log(newPlot);
    if(this.plot){
      this.updatePlot(newPlot);
    }else{
      this.createNewPlot(newPlot);
    }
  }
private updateFarm(newFarm: IFarm) {
    newFarm.id = this.farm.id;
    this.farmService.updateFarm(newFarm).subscribe({
      next: () => {
        this.toastr.success('Farm Updated successfully');
      },
      error: (err) => {
        this.toastr.error('An error occurred updating Farm');
      }
    });
  }
  getPlotTypes(){
    this.farmService.getPlotTypes().subscribe(data => {
      this.plotTypes = data;
    });
  }
  getFarms() {
    return this.farmService.getFarms().subscribe(data => {
      this.farms = data;
    });
  }

  createNewPlot(newPlot: IPlot) {
    this.farmService.createPlot(newPlot).subscribe({
      next: (res) => {
        this.toastr.success('Plot Created successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error creating Plot');
      }
    });
  }

  updatePlot(newPlot: IPlot) {
    newPlot.id = this.plot.id;
    this.farmService.updatePlot(newPlot).subscribe({
      next: (res) => {
        this.toastr.success('Plot Updated successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error updating Plot');
      }
    });
  }

}
