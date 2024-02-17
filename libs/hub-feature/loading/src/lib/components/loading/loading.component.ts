import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'hub-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}
  @Input() isLoading = false;

  ngOnInit() {
    this.loadingService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }
}
