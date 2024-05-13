import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmerCreateComponent } from './farmer-create/farmer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FarmerListComponent,
    FarmListComponent,
    FarmerCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmModule { }
