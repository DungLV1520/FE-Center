import {
  Component,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { HubFeatureLoadingModule } from '@hub-center/loading';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CONFIG_TABLE_COLUMN } from './config-table.config';
import { ApiUserService } from '@hub-center/hub-service/api-user';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import {
  TuiPreviewDialogService,
  TuiPreviewModule,
} from '@taiga-ui/addon-preview';
import { tuiClamp } from '@taiga-ui/cdk';
import {
  TuiDialogContext,
  TuiAlertService,
  TuiButtonModule,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adv-list-file',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzDropDownModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzCardModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzEmptyModule,
    HubFeatureLoadingModule,
    NzPaginationModule,
    NzTableModule,
    NzTagModule,
    NzDatePickerModule,
    NzPopoverModule,
    TuiRootModule,
    TuiPreviewModule,
    TuiButtonModule,
    TuiTooltipModule,
    TuiHintModule,
    NzUploadModule,
  ],
  providers: [NzNotificationService],
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListFileComponent implements OnInit {
  size: NzSelectSizeType = 'large';
  listOfColumn = CONFIG_TABLE_COLUMN;
  devices: any;
  totalItems = 0;
  pageIndex = 1;
  pageSize = 10;
  isModeViewTable = true;
  @ViewChild('preview')
  readonly preview?: TemplateRef<TuiDialogContext>;
  @ViewChild('contentSample')
  readonly contentSample?: TemplateRef<Record<string, unknown>>;
  index = 0;
  length = 2;
  file: any;
  totalElements:any
  totalImage:any
  totalVideo:any

  constructor(
    private apiUserService: ApiUserService,
    @Inject(TuiPreviewDialogService)
    private readonly previewService: TuiPreviewDialogService,
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['folderId']) {
        const obj = {
          folderId: params['folderId'],
          page: 0,
          size: 100,
        };
        this.getListFile(obj);
      }
    });
  }

  onShowModeTable() {
    this.isModeViewTable = !this.isModeViewTable;
  }

  get title(): string {
    return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
  }

  get previewContent(): PolymorpheusContent {
    return this.index === 0 && this.contentSample
      ? this.contentSample
      : 'https://avatars.githubusercontent.com/u/10106368';
  }

  show(): void {
    this.previewService.open(this.preview || '').subscribe({
      complete: () => console.info('complete'),
    });
  }

  download(): void {
    this.alerts.open('Downloading...').subscribe();
  }

  delete(): void {
    this.alerts.open('Deleting...').subscribe();
  }

  onSwipe(swipe: any): void {
    if (swipe.direction === 'left') {
      this.index = tuiClamp(this.index + 1, 0, this.length - 1);
    }

    if (swipe.direction === 'right') {
      this.index = tuiClamp(this.index - 1, 0, this.length - 1);
    }
  }

  handleChange(info: any): void {
    console.log(info);

    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
  }

  checked?: boolean[] = new Array(8).fill(false);

  showChecked(index: number): void {
    console.log(index);
  }

  getListFile(obj: any): void {
    this.apiUserService.getListFile(obj).subscribe((res: any) => {
      this.file = res.data.content;
      this.totalElements = res.data.totalElements;
      this.totalImage = res.data.totalImage;
      this.totalVideo = res.data.totalVideo;
    });
  }
}
