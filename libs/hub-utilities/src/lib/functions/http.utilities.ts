import { HttpParams } from '@angular/common/http';

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach((key) => {
      const value = req[key];
      if (value !== undefined) {
        options = options.set(key, value);
      }
    });
  }

  return options;
};
