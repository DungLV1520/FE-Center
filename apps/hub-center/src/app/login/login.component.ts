import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { finalize } from 'rxjs';
import {
  LocalStorageService,
  LocalStoreEnum,
} from '@hub-center/hub-service/storage';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'adv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  passwordVisible = false;
  isLoading = false;

  validateForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true],
  });

  constructor(
    private fb: FormBuilder,
    private apiUserService: ApiUserService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private notification: NzNotificationService
  ) {
    const accessToken = this.localStorageService.getItem(
      LocalStoreEnum.ACCESS_TOKEN
    );
    if (accessToken) {
      this.router.navigate(['/adv/device']);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isLoading = true;
      const formValue = this.validateForm.value;
      const obj = {
        username: formValue.userName,
        password: formValue.password,
      };

      this.apiUserService
        .login(obj)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);

            if (res?.result?.ok) {
              this.notification.create(
                'success',
                'Thông báo',
                'Đăng nhập thành công!!!',
                {
                  nzDuration: 2000,
                }
              );
              this.router.navigate(['adv/device']);
            } else {
              this.notification.create(
                'error',
                'Thông báo',
                res?.result?.message,
                {
                  nzDuration: 2000,
                }
              );
            }
          },
          error: (err) => {
            this.notification.create('error', 'Thông báo', err, {
              nzDuration: 2000,
            });
          },
        });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
