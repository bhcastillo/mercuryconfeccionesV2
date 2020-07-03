import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { data } from '../../data.json';
import { data2 } from '../../data.json';
import { data3 } from '../../data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  title = '';
  constructor() {
    this.getdata();
  }
  getdata(): void {
    this.title = 'Antifluidos';
    this.products = data;
  }
  getdata1(): void {
    this.title = 'moda Unisex';
    this.products = data2;
  }
}
