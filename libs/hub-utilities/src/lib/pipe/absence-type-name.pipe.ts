import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absenceTypeName',
  standalone: true,
})
export class AbsenceTypeNamePipe implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case '1':
        return 'Nghỉ cả ngày';

      case '2':
        return 'Nghỉ nửa ngày';
      default:
        return '---';
    }
  }
}
