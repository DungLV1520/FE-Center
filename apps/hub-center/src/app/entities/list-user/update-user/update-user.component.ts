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
  selector: 'adv-update-user-modal',
  template: `
    <label for="" class=" mb-2 required">Tên</label>
    <input type="text" [(ngModel)]="name" nz-input placeholder="Nhập tên" />
    <label for="" class="mt-3  mb-2 required">Số điện thoại</label>
    <input
      type="text"
      [(ngModel)]="phoneNumber"
      nz-input
      placeholder="Nhập số điện thoại"
    />
    <label class="mt-3  mb-2 required">Email</label>
    <input type="email" [(ngModel)]="email" nz-input placeholder="Nhập email" />
    <label class="mt-3  mb-2">Mật khẩu</label>
    <input
      type="text"
      [(ngModel)]="password"
      nz-input
      placeholder="Nhập mật khẩu"
    />
    <label class="mt-3  mb-2 required">Ngày hết hạn</label>
    <nz-date-picker
      [(ngModel)]="date"
      nzFormat="dd/MM/yyyy"
      class="w-100"
      nzPlaceHolder="Chọn ngày hết hạn"
    ></nz-date-picker>
    <label class="mt-3  mb-2 required">Vai trò</label>
    <nz-select class="w-100 " nzPlaceHolder="Chọn vai trò" [(ngModel)]="role">
      <ng-container *ngFor="let item of display">
        <nz-option [nzValue]="item.id" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
    <label class="mt-3  mb-2 required">Giới tính</label>
    <nz-select
      class="w-100 "
      nzPlaceHolder="Chọn giới tính"
      [(ngModel)]="gender"
    >
      <ng-container *ngFor="let item of listGender">
        <nz-option [nzValue]="item.id" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
    <label class="mt-3  mb-2 required">Trạng thái</label>
    <nz-select
      class="w-100 "
      nzPlaceHolder="Chọn trang thái"
      [(ngModel)]="status"
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
export class UpdateUserComponent implements OnInit {
  readonly nzModalData: any = inject(NZ_MODAL_DATA);
  name: any;
  phoneNumber: any;
  email: any;
  password: any;
  role: any;
  gender: any;
  date: any;
  status: any;
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
  listGender = [
    {
      id: 'MALE',
      name: 'Nam',
    },
    {
      id: 'FEMALE',
      name: 'Nữ',
    },
  ];
  listStatus = [
    {
      id: 'ACTIVE',
      name: 'Hoạt động',
    },
    {
      id: 'DEACTIVE',
      name: 'Vô hiệu hoá',
    },
  ];
  ngOnInit(): void {
    const data = this.nzModalData.data;
    this.name = data.fullName;
    this.phoneNumber = data.phoneNumb;
    this.email = data.mail;
    this.role = data.roles;
    this.gender = data.gender;
    this.date = data.expiryDate;
    this.status = data.status;
    this.limitGB = data.limitGB ?? 1;
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
  getStatus(): string {
    return this.status;
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
