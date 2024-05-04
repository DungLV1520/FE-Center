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
      nzPlaceHolder="Chon thư mục"
      [(ngModel)]="inputData"
    >
      <ng-container *ngFor="let item of folder">
        <nz-option
          nzValue="{{ item.id }}"
          nzLabel="{{ item.name }}"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class MoveFileComponent implements OnInit {
  inputData = '';
  folder: any;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.getListFolder();
  }

  getData(): string {
    return this.inputData;
  }

  getListFolder(): void {
    this.apiUserService.getListFolder().subscribe((res: any) => {
      this.folder = res?.data?.reduce((acc: any, curr: any) => {
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
