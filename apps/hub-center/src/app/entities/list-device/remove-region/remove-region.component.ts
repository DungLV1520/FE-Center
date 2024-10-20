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
    <label class="mb-2">Chọn khu vực</label>
    <nz-select class="w-100" nzPlaceHolder="Chọn khu vực xoá" [(ngModel)]="id">
      <ng-container *ngFor="let item of regions; let i = index">
        <nz-option nzValue="{{ item.id }}" [nzLabel]="item.name"></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class RemoveRegionComponent implements OnInit {
  id?: string;
  regions: any;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListRegion();
  }

  getId(): string | undefined {
    return this.id;
  }

  getListRegion(): void {
    this.apiUserService.getListRegion().subscribe((res: any) => {
      this.regions = res.data;
    });
  }
}
