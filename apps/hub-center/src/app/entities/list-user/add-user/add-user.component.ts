/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
    <label for="" class="required mb-1">Username</label>
    <input
      type="text"
      [(ngModel)]="username"
      nz-input
      placeholder="Nhập username"
    />
    <label for="" class="mt-3  mb-1 required ">Tên</label>
    <input type="text" [(ngModel)]="name" nz-input placeholder="Nhập tên" />
    <label for="" class="mt-3  mb-1 required">Số điện thoại</label>
    <input
      type="text"
      [(ngModel)]="phoneNumber"
      nz-input
      placeholder="Nhập số điện thoại"
    />
    <label class="mt-3  mb-1 required">Email</label>
    <input type="email" [(ngModel)]="email" nz-input placeholder="Nhập email" />
    <label class="mt-3  mb-1 required">Mật khẩu</label>
    <input
      type="text"
      [(ngModel)]="password"
      nz-input
      placeholder="Nhập mật khẩu"
    />
    <label class="mt-3  mb-1 required">Ngày hết hạn</label>
    <nz-date-picker
      [(ngModel)]="date"
      nzFormat="dd/MM/yyyy"
      class="w-100"
      nzPlaceHolder="Chọn ngày hết hạn"
    ></nz-date-picker>
    <label class="mt-3  mb-1 required">Vai trò</label>
    <nz-select class="w-100 " nzPlaceHolder="Chọn vai trò" [(ngModel)]="role">
      <ng-container *ngFor="let item of display">
        <nz-option [nzValue]="item.id" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
    <label class="mt-3  mb-1 required">Giới tính</label>
    <nz-select
      class="w-100 "
      nzPlaceHolder="Chọn giới tính"
      [(ngModel)]="gender"
    >
      <ng-container *ngFor="let item of listStatus">
        <nz-option [nzValue]="item.id" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
    <label class="mt-3  mb-1 required">Dung lượng</label>
    <input
      type="number"
      [(ngModel)]="limitGB"
      nz-input
      placeholder="Nhập dung lượng"
    />
  `,
})
export class AddUserComponent implements OnInit {
  readonly nzModalData: any = inject(NZ_MODAL_DATA);
  name: any;
  phoneNumber: any;
  email: any;
  password: any;
  role: any;
  gender: any;
  username: any;
  date: any;
  limitGB: any;
  display = [
    {
      id: 'ADMIN',
      name: 'Admin',
    },
    {
      id: 'USER',
      name: 'User',
    },
  ];
  listStatus = [
    {
      id: 'MALE',
      name: 'Nam',
    },
    {
      id: 'FEMALE',
      name: 'Nữ',
    },
  ];
  ngOnInit(): void {
    const currentDate = new Date();
    this.date = new Date(currentDate.setDate(currentDate.getDate() + 30));
    this.limitGB = 1;
  }
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
  getLimitGB(): string {
    return this.limitGB;
  }
  getExpiryDate(): any {
    if (this.date) {
      const dateObject = new Date(this.date);
      const isoDateString = dateObject?.toISOString();
      return isoDateString;
    }
    return '';
  }
}
