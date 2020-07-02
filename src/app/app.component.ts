import { Component } from '@angular/core';
import { FooterService } from './services/footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mercuryConfecciones';
  constructor(public footerService: FooterService) {}
}
