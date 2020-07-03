import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  anchoImagen = '190px';
  altoImagen = '234px';
  @Input() products: Product[];
  @Input() title: string;
  constructor() {
    this.products = [];
    this.title = '';
  }

  ngOnInit(): void {}
}
