import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  endPoint: string = 'http://localhost:3000/cart-items'

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any>{
    return this.http.get(this.endPoint);
  }

  deleteItem(id: number): Observable<any>{
    return this.http.delete(`${this.endPoint}/${id}`);
  }

  addItem(item: Item): Observable<any> {
    return this.http.post(this.endPoint, item);
  }

  // editItem(quantity): Observable<any>{
  //   return this.http.put(this.endPoint, quantity);
  // }
}
