import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsideComponent } from '@shared/component/aside/aside.component';
import { MenuComponent } from '@shared/component/menu/menu.component';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiHint, TuiPopup, TuiScrollable, TuiScrollbar, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonClose, TuiDrawer } from '@taiga-ui/kit';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/legacy';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    MenuComponent,
    AsideComponent,
    ReactiveFormsModule,
    NgForOf,
    TuiHint,
    TuiButton,
    TuiButtonClose,
    CdkFixedSizeVirtualScroll ,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable,
    TuiPopup,
    TuiDrawer,
    TuiInputModule,
    TuiTextfield,
    TuiInputPhoneModule,
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {}
