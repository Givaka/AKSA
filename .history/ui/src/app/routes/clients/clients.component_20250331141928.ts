import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';
import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';
import { TuiTable } from '@taiga-ui/addon-table';


import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { User } from '@shared/data/interface';
import { UserService } from '@shared/api/user/user.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    MenuComponent,

    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  protected userList: User[] = []

  constructor(private uApi: UserService) {
    uApi.getAll().subscribe(data => this.userList = data);
  }
}
