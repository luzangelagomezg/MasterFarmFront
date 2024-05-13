import { Component } from '@angular/core';
import { IFarm } from '../../models/farm';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrl: './farm-list.component.css'
})
export class FarmListComponent {

  data: IFarm[] = []; 

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.getFarms();
  }

  getFarms() {
    this.farmService.getFarms().subscribe(data => {
      this.data = data;
    });
  }

}
