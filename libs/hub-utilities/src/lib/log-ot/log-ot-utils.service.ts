import { Injectable } from '@angular/core';
import { LogOTStatus, LogOTTypes } from '@hub-center/hub-model';

@Injectable({
  providedIn: 'root',
})
export class LogOTUtilsService {
  convertLogOTStatus(status: LogOTStatus): string {
    switch (status) {
      case LogOTStatus.NEW:
        return 'Mới';
      case LogOTStatus.LEAD_APPROVED:
        return 'Lead đã duyệt';
      case LogOTStatus.PM_APPROVED:
        return 'PM đã duyệt';
      case LogOTStatus.REJECT:
        return 'Bị từ chối';
      case LogOTStatus.OS_LOG:
        return 'OS log';
      default:
        return status;
    }
  }

  convertLogOTTypes(otTypes: LogOTTypes): string {
    switch (otTypes) {
      case LogOTTypes.REGULAR:
        return 'OT ngày thường';
      case LogOTTypes.WEEKEND:
        return 'OT cuối tuần';
      case LogOTTypes.HOLIDAY:
        return 'OT ngày lễ';
      case LogOTTypes.GOLIVE_BEFORE_TWELVE:
        return 'Golive trước 12h';
      case LogOTTypes.GOLIVE_AFTER_TWELVE:
        return 'Golive sau 12h';
      default:
        return otTypes;
    }
  }

  convertDateFormat(inputDate: string): string {
    if (!inputDate) {
      return '';
    }
    const dateObject = new Date(inputDate);

    if (!isNaN(dateObject.getTime())) {
      const day = dateObject.getDate();
      const month = dateObject.getMonth() + 1;
      const year = dateObject.getFullYear();

      const formattedDate = `${day < 10 ? '0' : ''}${day}/${
        month < 10 ? '0' : ''
      }${month}/${year}`;

      return formattedDate;
    } else {
      return '';
    }
  }
}
