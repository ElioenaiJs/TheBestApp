import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);
  results!: Product[]

  async getAll(): Promise<Product[]> {  
    return firstValueFrom(
      this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
    );
  }
  constructor() { }
}
