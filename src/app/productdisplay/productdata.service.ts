import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  url:string='https://nodejsapidemo.herokuapp.com/products/';
  constructor(private _http:HttpClient) { }

  getAllProducts(){
      return this._http.get(this.url);
  }
  addProduct(item){
      let body=JSON.stringify(item);
      let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head});
  }
}
