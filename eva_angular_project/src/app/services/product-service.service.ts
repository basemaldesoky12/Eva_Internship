import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProduct } from '../shared-classes-types/IProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productsUrl = 'https://fakestoreapi.com/products?limit=6';

  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl);
}

getProductById(prdId: number): Observable<any> {
    return this.getAllProducts().pipe(
        map((products: any[]) => products.find(product => product.ID === prdId))
    );
}
  
}
