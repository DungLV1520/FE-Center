import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absenceResourceName',
  standalone: true,
})
export class AbsenceSourceNamePipe implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case '1':
        return 'Nghỉ phép thông thường';

      case '2':
        return 'Nghỉ bù golive';
      default:
        return '---';
    }
  }
}
