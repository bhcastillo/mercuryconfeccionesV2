import { Injectable } from '@angular/core';
// model
import { MenuSidebar } from '../models/menuSidebar';
import { Product } from '../models/product';
// data
import { menuSidebar } from '../../data.json';
import { dataDefault } from '../../data.json';
import { antifluidoAyS } from '../../data.json';
import { camisasDama } from '../../data.json';
import { camisasCaballero } from '../../data.json';
import { pantalonUnisex } from '../../data.json';
import { lineaUnisex } from '../../data.json';
import { lineaColegial } from '../../data.json';
import { lineaCorporativa } from '../../data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  title = '';
  constructor() {
    this.getdata();
  }
  getDataAntifluidoAyS(): void {
    console.log('object');
  }
  getDataSidebar(): MenuSidebar[] {
    return menuSidebar;
  }
  onClickItemMenu(id: number, nombre: string): void {
    switch (id) {
      case 1:
        this.title = nombre;
        this.products = antifluidoAyS;
        break;
      case 2:
        this.title = nombre;
        this.products = camisasDama;
        break;
      case 3:
        this.title = nombre;
        this.products = camisasCaballero;
        break;
      case 4:
        this.title = nombre;
        this.products = pantalonUnisex;
        break;
      case 5:
        this.title = nombre;
        this.products = lineaUnisex;
        break;
      case 6:
        this.title = nombre;
        this.products = lineaColegial;
        break;
      case 7:
        this.title = nombre;
        this.products = lineaColegial;
        break;
      default:
        return;
    }
  }
  getdata(): void {
    this.title = 'Nuestros Productos';
    this.products = dataDefault;
  }
}
