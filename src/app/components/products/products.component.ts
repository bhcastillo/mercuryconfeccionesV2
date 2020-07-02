import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'Nuestros productos';
  products: Product[] = [
    { id: '1', description: 'dd', price: 12 },
    { id: '1', description: 'dd', price: 12 },
    { id: '1', description: 'dd', price: 12 },
    { id: '1', description: 'dd', price: 12 },
    { id: '1', description: 'dd', price: 12 },
    { id: '1', description: 'dd', price: 12 },
    { id: '1', description: 'dd', price: 12 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
