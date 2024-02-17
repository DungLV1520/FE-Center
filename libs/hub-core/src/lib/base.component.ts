import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'hub-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe = new ReplaySubject<boolean>();

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    // console.log('init');
  }

  destroyData(): void {
    // console.log('init');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
    this.destroyData();
  }
}
