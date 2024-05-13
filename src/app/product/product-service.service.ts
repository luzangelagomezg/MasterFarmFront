import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProductType } from '../models/producttype';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl = environment.apiUrl + 'api/';
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<IProduct[]>(this.apiurl + 'Product');
  }

  getProduct(id:number): Observable<IProduct>{
    return this.http.get<IProduct>(this.apiurl + 'Product/'+id);
  }

  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(this.apiurl + 'Product/'+product.id+'?name='+product.name+'&productTypeId='+product.productTypeId,'');
  }

  deleteProduct(id:number): Observable<IProduct>{
    return this.http.delete<IProduct>(this.apiurl + 'Product/'+id);
  }

  createProduct(newProduct: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.apiurl + 'Product/'+newProduct.productTypeId+'/'+newProduct.name,'');
  }

  getProductTypes(){
    return this.http.get<IProductType[]>(this.apiurl + 'ProductType');
  }

  createProductType(newProductType: IProductType): Observable<IProductType>{
    return this.http.post<IProductType>(this.apiurl + 'ProductType/'+newProductType.productType,'');
  }

  getProductType(id:number): Observable<IProductType>{
    return this.http.get<IProductType>(this.apiurl + 'ProductType/'+id);
  }

  updateProductType(productType: IProductType): Observable<IProductType>{
    return this.http.put<IProductType>(this.apiurl + 'ProductType/'+productType.id+'?productType='+productType.productType,'');
  }

  deleteProductType(id:number): Observable<IProductType>{
    return this.http.delete<IProductType>(this.apiurl + 'ProductType/'+id);
  }
}
