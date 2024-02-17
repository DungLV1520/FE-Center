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
  selector: 'hub-login',
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
    const user = this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY);
    if (user) {
      this.router.navigate(['hub/create-post']);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isLoading = true;
      const formValue = this.validateForm.value;
      const obj = {
        username: formValue.userName,
        password: formValue.password,
        rememberMe: true
      };

      this.apiUserService
        .login(obj)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe({
          next: () => {
            this.notification.create(
              'success',
              'Thông báo',
              'Đăng nhập thành công!!!',
              {
                nzDuration: 2000,
              }
            );
            this.router.navigate(['hub/create-post']);
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
