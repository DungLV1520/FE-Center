import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  imports: [FormsModule, NzInputModule, NzSelectModule, NgFor, NgIf],
  standalone: true,
  selector: 'adv-remove-folder',
  template: `
    <label class="mb-2">Chọn thư mục</label>
    <nz-select class="w-100" nzPlaceHolder="Chọn thư mục xoá" [(ngModel)]="id">
      <ng-container *ngFor="let item of folder; let i = index">
        <nz-option nzValue="{{ item.id }}" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class RemoveFolderComponent implements OnInit {
  folder: any;
  id?: string;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListFolder();
  }

  getIdFolder(): string | undefined {
    return this.id;
  }

  getListFolder(): void {
    this.apiUserService.getListFolder().subscribe((res: any) => {
      this.folder = res.data;
    });
  }
}
