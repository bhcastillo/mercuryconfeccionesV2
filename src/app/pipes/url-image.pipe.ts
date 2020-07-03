import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImage',
})
export class UrlImagePipe implements PipeTransform {
  transform(value: string): string {
    const URL_IMAGE = '../../../../assets/images';
    const folder: string = value.substring(0, 2);
    return `${URL_IMAGE}/${folder}/${value}/${value}.jpg`;
  }
}
