import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  imports: [FormsModule, NzInputModule],
  standalone: true,
  selector: 'adv-rename-modal',
  template: `
    <input
      type="text"
      [(ngModel)]="inputData"
      nz-input
      placeholder="Nhập tên mới"
    />
  `,
})
export class RenameModalComponent {
  inputData = '';

  getData(): string {
    return this.inputData;
  }
}