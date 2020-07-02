import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(public productsService: FooterService) {
    this.productsService.runViewFooter(false);
  }

  ngOnInit(): void {}
}
