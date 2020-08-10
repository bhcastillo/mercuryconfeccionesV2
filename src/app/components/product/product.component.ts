import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product;
  urlImage: string;
  imagesFocused: string[];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    let id = this.route.snapshot.params['id'];
    this.product = this.productsService.getProduct(id);
    this.imagesFocused = Object.values(this.product.focused);
    this.urlImage = this.product.url;
  }

  ngOnInit(): void {}
  onClickChangeImage(image: string) {
    this.urlImage = image;
  }
}
