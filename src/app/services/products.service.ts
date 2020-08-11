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
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  product: Product[] = [];
  firstClickSidebar: boolean = false;
  title = '';
  constructor(private router: Router) {
    this.getdata();
  }

  getDataSidebar(): MenuSidebar[] {
    return menuSidebar;
  }
  onClickItemMenu(id: number, nombre: string): void {
    console.log('sidebar');
    this.firstClickSidebar = true;
    switch (id) {
      case 1:
        this.onClickLineaHospitalaria(nombre);
        this.router.navigate(['/productos']);

        break;
      case 2:
        this.onClickBlusas(nombre);
        this.router.navigate(['/productos']);

        break;
      case 3:
        this.onClickPantalones(nombre);
        this.router.navigate(['/productos']);

        break;
      default:
        return;
    }
  }
  onClickLineaHospitalaria(nombre: string) {
    this.title = nombre;
    this.products = lineaHospitalaria;
  }
  onClickBlusas(nombre: string) {
    this.title = nombre;
    this.products = blusas;
  }
  onClickPantalones(nombre: string) {
    this.title = nombre;
    this.products = pantalones;
  }

  getdata(): void {
    this.title = 'Linea Hospitalaria';
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
      case 'bl':
        this.product = blusas.filter((element) => {
          return element.url === id;
        });
        break;
      case 'pa':
        this.product = pantalones.filter((element) => {
          return element.url === id;
        });
        break;
    }
    return this.product[0];
  }
}
