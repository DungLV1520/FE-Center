import {Component} from "@angular/core";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NgForOf, NgIf} from "@angular/common";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
  standalone: true,
  selector: 'adv-add-presentation-modal',
  templateUrl: './add-presentation-modal.component.html',
  imports: [
    FormsModule,
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzSelectModule,
    NzRadioModule,
    NzDatePickerModule,
    NgIf,
    NzModalModule,
    NzButtonModule,
    NgForOf
  ],
  styleUrls: ['./add-presentation-modal.component.scss']
})

export class AddPresentationModalComponent {
  readonly searchForm = new FormControl();
  multipleValue = [];
  radioValue : 'day' | 'custom' = 'day';
  date = null;
  options = []

  isDatePickerVisible = false;
  selectedDate: Date | null = null;
  form: FormGroup;

  constructor(private fb: FormBuilder, private modal: NzModalService) {
    this.form = this.fb.group({
      multiSelect: [[]]
    });
  }

  openDatePicker(): void {
    this.isDatePickerVisible = true;
  }

  addDate(): void {
    if (this.selectedDate) {
      // @ts-ignore
      this.options = [...this.options, this.selectedDate.toISOString().split('T')[0]];
      this.form.controls['multiSelect'].setValue([...this.form.controls['multiSelect'].value, this.selectedDate.toISOString().split('T')[0]]);
      this.isDatePickerVisible = false;
      this.selectedDate = null;
    }
  }

  handleDateChange(result: Date): void {
    this.selectedDate = result;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
