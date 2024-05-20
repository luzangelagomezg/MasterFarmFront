import { Component, OnInit } from '@angular/core';
import { HarvestRecord } from '../../models/harvestrecord';
import { FarmService } from '../farm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-harvestrecord-list',
  templateUrl: './harvestrecord-list.component.html',
  styleUrl: './harvestrecord-list.component.css'
})
export class HarvestrecordListComponent implements OnInit{
  
  data: HarvestRecord[] = [];

  constructor(
    private farmService:FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getHarvest();
  }

  getHarvest(){
    this.farmService.getHarvestRecords().subscribe(data => {
      this.data = data;
    });
  }

  gotoItem(harvestRecordId:number){
    this.router.navigate(['harvestrecords', harvestRecordId]);
  }

  deleteItem(harvestRecordId:number)  {
    this.farmService.deleteHarvestRecord(harvestRecordId).subscribe({
      next: (res) => {
        console.log('Harvest Record Deleted');        
        this.getHarvest();
        this.toastr.success('Harvest Record Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Harvest Record Not Deleted: ' + err.error, 'Error');
      }
    });

  }
}
