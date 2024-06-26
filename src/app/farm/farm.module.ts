import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmerCreateComponent } from './farmer-create/farmer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { AnimalCreateComponent } from './animal-create/animal-create.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { PlotListComponent } from './plot-list/plot-list.component';
import { PlotCreateComponent } from './plot-create/plot-create.component';
import { PlottypeListComponent } from './plottype-list/plottype-list.component';
import { PlottypeCreateComponent } from './plottype-create/plottype-create.component';
import { AgriculturaloperationtypeListComponent } from './agriculturaloperationtype-list/agriculturaloperationtype-list.component';
import { AgriculturaloperationtypeCreateComponent } from './agriculturaloperationtype-create/agriculturaloperationtype-create.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropCreateComponent } from './crop-create/crop-create.component';
import { AgriculturaloperationListComponent } from './agriculturaloperation-list/agriculturaloperation-list.component';
import { AgriculturaloperationCreateComponent } from './agriculturaloperation-create/agriculturaloperation-create.component';
import { HarvestrecordListComponent } from './harvestrecord-list/harvestrecord-list.component';
import { HarvestrecordCreateComponent } from './harvestrecord-create/harvestrecord-create.component';



@NgModule({
  declarations: [
    FarmerListComponent,
    FarmListComponent,
    FarmerCreateComponent,
    FarmCreateComponent,
    AnimalCreateComponent,
    AnimalListComponent,
    PlotListComponent,
    PlotCreateComponent,
    PlottypeListComponent,
    PlottypeCreateComponent,
    AgriculturaloperationtypeListComponent,
    AgriculturaloperationtypeCreateComponent,
    CropListComponent,
    CropCreateComponent,
    AgriculturaloperationListComponent,
    AgriculturaloperationCreateComponent,
    HarvestrecordListComponent,
    HarvestrecordCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmModule { }
