import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/Products'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(environment.apiUrl + 'Products');
  }

}
