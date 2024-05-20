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
    <label class="mb-2">Tên thư mục</label>
    <input
      type="text"
      [(ngModel)]="folderName"
      nz-input
      placeholder="Nhập tên thư mục"
    />
    <label class="mt-4 mb-2">Vị trí lưu</label>
    <nz-select
      class="w-100"
      nzPlaceHolder="Chọn vị trí lưu"
      [(ngModel)]="folderPositionSave"
    >
      <ng-container *ngFor="let item of folder; let i = index">
        <nz-option
          *ngIf="i === 0"
          nzValue="{{ item.id }}"
          [nzLabel]="'Tệp '"
        ></nz-option>
        <nz-option
          *ngIf="i > 0"
          nzValue="{{ item.id }}"
          [nzLabel]="'Tệp / ' + item.name"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class AddFolderComponent implements OnInit {
  folderName = '';
  folderPositionSave = '';
  folder: any;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListFolder();
  }

  getFolderName(): string {
    return this.folderName;
  }

  getFolderPositionSave(): string {
    return this.folderPositionSave;
  }

  getListFolder(): void {
    this.apiUserService.getListFolder().subscribe((res: any) => {
      const objFirst = {
        id: null,
        name: 'Tệp',
        parentId: null,
        subs: null,
      };
      this.folder = res.data;
      this.folder = [objFirst, ...this.folder];
    });
  }
}
