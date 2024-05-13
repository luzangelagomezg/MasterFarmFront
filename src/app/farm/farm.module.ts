import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmListComponent } from './farm-list/farm-list.component';



@NgModule({
  declarations: [
    FarmerListComponent,
    FarmListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FarmModule { }
