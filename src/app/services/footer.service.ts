import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  viewFooter = true;

  constructor() {}
  runViewFooter(value: boolean): void {
    this.viewFooter = value;
  }
}
