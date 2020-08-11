import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'Nuestros productos';

  constructor(
    public productsService: ProductsService,
    private footerService: FooterService
  ) {
    if (!this.productsService.firstClickSidebar) {
      this.productsService.getdata();
    }
    this.footerService.viewFooter = true;
  }

  ngOnInit(): void {}
}
