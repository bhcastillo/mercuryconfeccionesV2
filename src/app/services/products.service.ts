import { Injectable } from '@angular/core';
// model
import { MenuSidebar } from '../models/menuSidebar';
import { Product } from '../models/product';
// data
import { menuSidebar } from '../../data.json';
import { dataDefault } from '../../data.json';
import { lineaHospitalaria } from '../../data.json';
import { blusas } from '../../data.json';
import { pantalones } from '../../data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  product: Product[] = [];
  title = '';
  constructor() {
    this.getdata();
  }

  getDataSidebar(): MenuSidebar[] {
    return menuSidebar;
  }
  onClickItemMenu(id: number, nombre: string): void {
    switch (id) {
      case 1:
        this.title = nombre;
        this.products = lineaHospitalaria;
        break;
      case 2:
        this.title = nombre;
        this.products = blusas;
        break;
      case 3:
        this.title = nombre;
        this.products = pantalones;
        break;
      default:
        return;
    }
  }
  getdata(): void {
    this.title = 'Nuestros Productos';
    this.products = lineaHospitalaria;
  }
  getProduct(id: string): Product {
    let typeItem = id.substr(0, 2);

    switch (typeItem) {
      case 'lh':
        this.product = lineaHospitalaria.filter((element) => {
          return element.url === id;
        });
        break;
    }
    return this.product[0];
  }
}
