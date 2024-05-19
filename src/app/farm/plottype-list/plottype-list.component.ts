import { Component, OnInit } from '@angular/core';
import { IPlotType } from '../../models/plottype';
import { FarmService } from '../farm.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plottype-list',
  templateUrl: './plottype-list.component.html',
  styleUrl: './plottype-list.component.css'
})
export class PlottypeListComponent implements OnInit{

  data: IPlotType[] = [];

  constructor(
    private farmService: FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPlotTypes();
  }

  getPlotTypes(){
    this.farmService.getPlotTypes().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(id: number){
    this.router.navigate(['/plottypes', id]);
  }

  deleteItem(id: number)  {
    this.farmService.deletePlotType(id).subscribe({
      next: () => {      
        this.getPlotTypes();
        this.toastr.success('Plot Type deleted successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error deleting Plot Type ');
      }
    });

  }

}
