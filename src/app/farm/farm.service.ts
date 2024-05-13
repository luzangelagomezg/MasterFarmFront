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

  getFarms(){
    return this.http.get<IFarm[]>(this.apiurl + 'Farm');
  }
}