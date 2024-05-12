import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProductType } from '../models/producttype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl = environment.apiUrl + 'api/';
  constructor(private http: HttpClient) { }

  getProductTypes(){
    return this.http.get<IProductType[]>(this.apiurl + 'ProductType');
  }
}
