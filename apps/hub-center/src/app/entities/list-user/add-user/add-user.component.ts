import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  imports: [
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NgFor,
    NzDatePickerModule,
  ],
  standalone: true,
  selector: 'adv-add-user-modal',
  template: `
    <label for="">Username</label>
    <input
      type="text"
      [(ngModel)]="username"
      nz-input
      placeholder="Nhập username"
    />
    <label for="" class="mt-3">Tên</label>
    <input type="text" [(ngModel)]="name" nz-input placeholder="Nhập tên" />
    <label for="" class="mt-3">Số điện thoại</label>
    <input
      type="number"
      [(ngModel)]="phoneNumber"
      nz-input
      placeholder="Nhập số điện thoại"
    />
    <label class="mt-3">Email</label>
    <input type="email" [(ngModel)]="email" nz-input placeholder="Nhập email" />
    <label class="mt-3">Nhập mật khẩu</label>
    <input
      type="text"
      [(ngModel)]="password"
      nz-input
      placeholder="Nhập mật khẩu"
    />
    <label class="mt-3">Ngày sinh</label>
    <nz-date-picker [(ngModel)]="date" class="w-100"></nz-date-picker>
    <label class="mt-3">Role</label>
    <nz-select class="w-100 " nzPlaceHolder="Chọn role" [(ngModel)]="role">
      <ng-container *ngFor="let item of display">
        <nz-option [nzValue]="item.id" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
    <label class="mt-3">Giới tính</label>
    <nz-select
      class="w-100 "
      nzPlaceHolder="Chọn giới tính"
      [(ngModel)]="gender"
    >
      <ng-container *ngFor="let item of listStatus">
        <nz-option [nzValue]="item.id" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class AddUserComponent {
  readonly nzModalData: any = inject(NZ_MODAL_DATA);
  name: any;
  phoneNumber: any;
  email: any;
  password: any;
  role: any;
  gender: any;
  username: any;
  date: any;

  display = [
    {
      id: 'ADMIN',
      name: 'ADMIN',
    },
    {
      id: 'USER',
      name: 'USER',
    },
  ];
  listStatus = [
    {
      id: 'MALE',
      name: 'MALE',
    },
    {
      id: 'FEMALE',
      name: 'FEMALE',
    },
  ];

  getName(): string {
    return this.name;
  }
  getPhone(): string {
    return this.phoneNumber;
  }
  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  getRole(): string {
    return this.role;
  }
  getGender(): string {
    return this.gender;
  }
  getUsername(): string {
    return this.username;
  }
  getBirthday(): any {
    const dateObject = new Date(this.date);
    const isoDateString = dateObject.toISOString();
    return isoDateString;
  }
}
