import { Component } from '@angular/core';
import { IFarmer } from '../../models/Farmer';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrl: './farmer-list.component.css'
})
export class FarmerListComponent {

  data: IFarmer[] = [];

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.getFarmers();
  }

  getFarmers() {
    this.farmService.getFarmers().subscribe(data => {
      this.data = data;
    });
  }
}
