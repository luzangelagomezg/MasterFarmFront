import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IFarmer } from '../models/Farmer';
import { IFarm } from '../models/farm';
import { IAnimal } from '../models/animal';
import { IPlot } from '../models/plot';
import { IPlotType } from '../models/plottype';
import { IAgriculturalOperationType } from '../models/agriculturaloperationtype';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
           
  private apiurl = environment.apiUrl + 'api/';
  constructor(private http: HttpClient) { }

  getFarmers(){
    return this.http.get<IFarmer[]>(this.apiurl + 'Farmer');
  }

  getFarmer(id:number){
    return this.http.get<IFarmer>(this.apiurl + 'Farmer/'+id);
  }

  updateFarmer(farmer: IFarmer){
    return this.http.put(this.apiurl + 'Farmer/'+farmer.id+'?firstNameFarmer='+farmer.firstNameFarmer+'&lastNameFarmer'+farmer.lastNameFarmer+'&emailFarmer='+
      farmer.emailFarmer+'&phoneFarmer='+farmer.phoneFarmer+'&addressFarmer='+farmer.addressFarmer, '');
  }

  createFarmer(farmer: IFarmer){
    return this.http.post(this.apiurl + 'Farmer/'+farmer.firstNameFarmer+'/'+farmer.lastNameFarmer+'/'+
      farmer.emailFarmer+'/'+farmer.phoneFarmer+'/'+farmer.addressFarmer, '');
  }

  deleteFarmer(id: number){
    return this.http.delete(this.apiurl + 'Farmer/'+id);
  }
  
  getFarms(){
    return this.http.get<IFarm[]>(this.apiurl + 'Farm');
  }

  getFarm(id:number){
    return this.http.get<IFarm>(this.apiurl + 'Farm/'+id);
  }

  updateFarm(farm: IFarm){
    return this.http.put(this.apiurl + 'Farm/'+farm.id+'?farmName='+farm.farmName+'&farmerId='+farm.farmerId, '');
  }

  createFarm(farm: IFarm){
    return this.http.post(this.apiurl + 'Farm/'+farm.farmName+'/'+farm.farmerId, '');
  }

  deleteFarm(id: number){
    return this.http.delete(this.apiurl + 'Farm/'+id);
  }
  getAnimals(){
    return this.http.get<IAnimal[]>(this.apiurl + 'Animal');
  }
  getAnimal(id:number){
    return this.http.get<IAnimal>(this.apiurl + 'Animal/'+id);
  }
  createAnimal(animal: IAnimal){
    return this.http.post(this.apiurl + 'Animal/'+animal.nameAnimal+'/'+animal.plotId, '');
  }
  deleteAnimal(id: number){
    return this.http.delete(this.apiurl + 'Animal/'+id);
  }

  updateAnimal(animal: IAnimal){
    return this.http.put(this.apiurl + 'Animal/'+animal.id+'?nameAnimal='+animal.nameAnimal+'&plotId='+animal.plotId, '');
  }

  getPlots(){
    return this.http.get<IPlot[]>(this.apiurl + 'Plot');
  }

  getPlot(id: number){
    return this.http.get<IPlot>(this.apiurl + 'Plot/'+id);
  } 

  getPlotType(id: number) {
    return this.http.get<IPlotType>(this.apiurl + 'PlotType/' + id);
  }

  updatePlotType(newPlotType: IPlotType) {
    return this.http.put(this.apiurl + 'PlotType/' + newPlotType.id + '?plottype=' + newPlotType.plotType, '');
  }

  createPlotType(newPlotType: IPlotType) {
    return this.http.post(this.apiurl + 'PlotType/' + newPlotType.plotType, '');
  }

  getPlotTypes() {
    return this.http.get<IPlotType[]>(this.apiurl + 'PlotType');
  }

  deletePlotType(id: number) {
    return this.http.delete(this.apiurl + 'PlotType/' + id);
  }
  updatePlot(newPlot: IPlot) {
    return this.http.put(this.apiurl + 'Plot/' + newPlot.id + '?number=' + newPlot.number + '&farmId=' + newPlot.farmId + '&plotTypeId=' + newPlot.plotTypeId, '');
  }
  createPlot(newPlot: IPlot) {
    return this.http.post(this.apiurl + 'Plot/' + newPlot.number + '/' + newPlot.farmId + '/' + newPlot.plotTypeId, '');
  }
  deletePlot(id: number) {
    return this.http.delete(this.apiurl + 'Plot/' + id);
  }
  getAgriculturalOperationTypes() {
    return this.http.get<IAgriculturalOperationType[]>(this.apiurl + 'AgriculturalOperationsType');
  }
  getAgriculturalOperationType(id: number) {
    return this.http.get<IAgriculturalOperationType>(this.apiurl + 'AgriculturalOperationsType/' + id);
  }
  deleteAgriculturalOperationTypes(id: number) {
    return this.http.delete(this.apiurl + 'AgriculturalOperationsType/' + id);
  }
  createAgriculturalOperationType(newAgriculturalOperationType: IAgriculturalOperationType) {
    return this.http.post(this.apiurl + 'AgriculturalOperationsType/' + newAgriculturalOperationType.type, '');
  }
  updateAgriculturalOperationType(newAgriculturalOperationType: IAgriculturalOperationType) {
    return this.http.put(this.apiurl + 'AgriculturalOperationsType/' + newAgriculturalOperationType.id + '?type=' + newAgriculturalOperationType.type, '');
  }
}