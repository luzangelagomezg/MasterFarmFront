import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPlotType } from '../../models/plottype';
import { Farm } from '../../models/farm';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plottype-create',
  templateUrl: './plottype-create.component.html',
  styleUrl: './plottype-create.component.css'
})
export class PlottypeCreateComponent implements OnInit{

form!: FormGroup;
id!:  number | null;
plotType!: IPlotType;

constructor(
  private formBuilder: FormBuilder,
  private farmService: FarmService,
  private toastr: ToastrService,
  private route: ActivatedRoute
) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      plotType: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getPlotType(this.id).subscribe(plotType => {
          if(plotType){
            this.plotType = plotType;
            this.form.patchValue(plotType);
          }
        });
      }
    });
  }

onSubmit(newPlotType: IPlotType){
  console.log(newPlotType);
  if(this.plotType){
    this.updatePlotType(newPlotType);
  }else{
    this.createNewPlotType(newPlotType);
  }
}

updatePlotType(newPlotType: IPlotType) {
  newPlotType.id = this.plotType.id;
  this.farmService.updatePlotType(newPlotType).subscribe({
    next: (res) => {
      this.toastr.success('Plot Type Updated successfully');
    },
    error: (err) => {
      this.toastr.error('Error updating Plot: '+err.error);
    }
  });
}
createNewPlotType(newPlotType: IPlotType) {
this.farmService.createPlotType(newPlotType).subscribe({
  next: (res) => {
    this.toastr.success('Plot Type Created successfully');
  },
  error: (err) => {
    this.toastr.error('Error creating Plot Type: '+err.message);
  }
});
}

}
