import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImageMin',
})
export class UrlImageMinPipe implements PipeTransform {
  transform(url: string): string {
    const URL_IMAGE = '../../../../assets/images';
    const folder: string = url.substring(0, 2);
    const isFocused: string = url.charAt(url.length - 1);
    if (!isNaN(parseFloat(isFocused))) {
      return `${URL_IMAGE}/${folder}/${url}/min-${url}.jpg`;
    } else {
      const folderImages: string = url.substring(0, 5);
      return `${URL_IMAGE}/${folder}/${folderImages}/min-${url}.jpg`;
    }
  }
}
