import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

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
  constructor(private router:Router) {
    this.products = [];
    this.title = '';
  }

  ngOnInit(): void {}
  onClickItem(id:string):void{
    this.router.navigate(['producto/'+id])
  }
}
