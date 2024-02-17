import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import {
  LocalStorageService,
  LocalStoreEnum,
} from '@hub-center/hub-service/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'hub-navbar',
  standalone: true,
  imports: [CommonModule, NzLayoutModule, NzIconModule, NzDropDownModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: any;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.user = JSON.parse(
      this.localStorageService.getItem(LocalStoreEnum.CUSTOMER_KEY)
    );
  }

  logout(): void {
    this.localStorageService.removeItem(LocalStoreEnum.ACCESS_TOKEN);
    this.localStorageService.removeItem(LocalStoreEnum.CUSTOMER_KEY);
    this.router.navigate(['/login']);
  }
}
