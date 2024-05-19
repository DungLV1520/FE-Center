import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  imports: [FormsModule, NzInputModule, NzSelectModule, NgFor, NgIf],
  standalone: true,
  selector: 'adv-add-region',
  template: `
    <label class="mb-2">Tên khu vực</label>
    <input
      type="text"
      [(ngModel)]="regionName"
      nz-input
      placeholder="Nhập tên khu vực"
    />
    <label class="mt-4 mb-2">Vị trí lưu</label>
    <nz-select
      class="w-100"
      nzPlaceHolder="Chọn vị trí lưu"
      [(ngModel)]="regionPositionSave"
    >
      <ng-container *ngFor="let item of regions; let i = index">
        <nz-option
          *ngIf="i === 0"
          nzValue="{{ item.id }}"
          [nzLabel]="'Thiết bị '"
        ></nz-option>
        <nz-option
          *ngIf="i > 0"
          nzValue="{{ item.id }}"
          [nzLabel]="'Thiết bị / ' + item.name"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class AddRegionComponent implements OnInit {
  regionName = '';
  regionPositionSave = '';
  regions: any;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListRegion();
  }

  getRegionName(): string {
    return this.regionName;
  }

  getRegionPositionSave(): string {
    return this.regionPositionSave;
  }

  getListRegion(): void {
    this.apiUserService.getListRegion().subscribe((res: any) => {
      const objFirst = {
        id: null,
        name: 'Thiết bị',
        parentId: null,
        subs: null,
      };
      this.regions = res.data;
      this.regions = [objFirst, ...this.regions];
    });
  }
}
