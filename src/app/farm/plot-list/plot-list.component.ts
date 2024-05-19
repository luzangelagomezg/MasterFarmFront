import { Component, OnInit } from '@angular/core';
import { IPlot } from '../../models/plot';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrl: './plot-list.component.css'
})
export class PlotListComponent implements OnInit{

  data: IPlot[] = [];

  constructor(
    private farmService: FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPlots();
  }

  getPlots(){
    this.farmService.getPlots().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(id: number){
    this.router.navigate(['/plots', id]);
  }

  deleteItem(id: number)  {
    this.farmService.deletePlot(id).subscribe({
      next: (res) => {      
        this.getPlots();
        this.toastr.success('Plot deleted successfully');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Error deleting Plot ');
      }
    });

  }

}
