import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';

import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';

import { TuiTable } from '@taiga-ui/addon-table';
import { NgForOf } from '@angular/common';

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
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {}
