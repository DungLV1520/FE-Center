import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength = 20): string {
    if (value?.length <= maxLength) {
      return value;
    }

    const startLength = Math.ceil(maxLength / 2) - 2;
    const endLength = Math.floor(maxLength / 2) - 1;
    return `${value?.substr(0, startLength)}...${value?.substr(
      value?.length - endLength
    )}`;
  }
}
