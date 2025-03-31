import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';

import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';

import { TuiTable } from '@taiga-ui/addon-table';
import { DatePipe, DecimalPipe, NgForOf } from '@angular/common';
import { Schedule, Service } from '@shared/data/interface';
import { ScheduleService } from '@shared/api/schedule/schedule.service';
import { ServiceService } from '@shared/api/service/service.service';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    MenuComponent,
    NgForOf,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable,

    TuiCurrencyPipe,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  protected eventsList: Schedule[] = [];
  protected servicesList: Service[] = [];

  getServiceCost(servicesName: string): number {
    return this.servicesList.filter((item) => item.title == servicesName)[0]
      .cost;
  }

  constructor(private eApi: ScheduleService, private sApi: ServiceService) {
    this.getData();

    sApi.getAll().subscribe((data) => (this.servicesList = data));
  }

  getData() {
    this.eApi.get().subscribe((data) => (this.eventsList = data));
  }
}
