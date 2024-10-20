import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  imports: [FormsModule, NzInputModule, NzSelectModule, NgFor],
  standalone: true,
  selector: 'adv-move-file-modal',
  template: `
    <nz-select
      class="w-100"
      nzPlaceHolder="Chon khu vực"
      [(ngModel)]="inputData"
    >
      <ng-container *ngFor="let item of region">
        <nz-option
          nzValue="{{ item.id }}"
          nzLabel="{{ item.name }}"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class MoveDeviceComponent implements OnInit {
  inputData = '';
  region: any;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListRegion();
  }

  getData(): string {
    return this.inputData;
  }

  getListRegion(): void {
    this.apiUserService.getListRegion().subscribe((res: any) => {
      this.region = res?.data?.reduce((acc: any, curr: any) => {
        if (curr.subs) {
          acc.push(...curr.subs);
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
    });
  }
}
