import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productsUrl = 'assets/Data/products.json';

  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this.http.get(this.productsUrl);
}

getProductById(prdId: number): Observable<any> {
    return this.getAllProducts().pipe(
        map((products: any[]) => products.find(product => product.ID === prdId))
    );
}
  
}
