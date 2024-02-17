import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logActivityStatus',
  standalone: true,
})
export class LogActivityStatusPipe implements PipeTransform {
  transform(status: string, args?: any): any {
    switch (status) {
      case '1':
        return 'Mới';
      case '2':
        return 'Lead đã duyệt ';
      case '3':
        return 'PM đã duyệt';
      case '4':
        return 'Từ chối';
      default:
        return "Không xác định";
    }
  }
}
