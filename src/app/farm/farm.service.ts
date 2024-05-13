import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IFarmer } from '../models/Farmer';
import { IFarm } from '../models/farm';

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
}