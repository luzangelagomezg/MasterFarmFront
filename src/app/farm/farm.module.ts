import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmerCreateComponent } from './farmer-create/farmer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { AnimalCreateComponent } from './animal-create/animal-create.component';
import { AnimalListComponent } from './animal-list/animal-list.component';



@NgModule({
  declarations: [
    FarmerListComponent,
    FarmListComponent,
    FarmerCreateComponent,
    FarmCreateComponent,
    AnimalCreateComponent,
    AnimalListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmModule { }
