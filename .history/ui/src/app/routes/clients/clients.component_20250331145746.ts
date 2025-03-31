import { Component, inject, signal } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';
import {
  TuiButton,
  TuiDialogService,
  TuiHint,
  TuiPopup,
  TuiScrollable,
  TuiScrollbar,
} from '@taiga-ui/core';
import { TuiTable } from '@taiga-ui/addon-table';

import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Client } from '@shared/data/interface';
import { UserService } from '@shared/api/user/user.service';
import { NgForOf } from '@angular/common';
import { filter, finalize } from 'rxjs';
import { AsideComponent } from '../../shared/component/aside/aside.component';
import { TUI_CONFIRM, TuiDrawer } from '@taiga-ui/kit';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    MenuComponent,
    AsideComponent,
    NgForOf,
    TuiHint,
    TuiButton,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable,
    TuiPopup,
    TuiDrawer,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  protected readonly dialogs = inject(TuiDialogService);

  private clientsTestData: Client[] = [
    {
      fullname: 'Коновалова Яна Максимовна',
      phone: '+7 (924) 926-36-40',
      email: 'YanaKonovalova776',
    },
    {
      fullname: 'Истомин Владислав Денисович',
      phone: '+7 (995) 199-15-71',
      email: 'VladislavIstomin766',
    },
    {
      fullname: 'Егорова Евгеиня Анатольевна',
      phone: '+7 (915) 771-52-46',
      email: 'EvgeinyaEgorova683',
    },
    {
      fullname: 'Чаурина Дарья Владиславовна',
      phone: '+7 (999) 868-36-93',
      email: 'DaryaChaurina861',
    },
    {
      fullname: 'Пугачева Галина Константиновна',
      phone: '+7 (982) 022-82-29',
      email: 'GalinaPugacheva636',
    },
    {
      fullname: 'Шаповалов Ипполит Дмитриевич',
      phone: '+7 (957) 949-56-84',
      email: 'IppolitShapovalov77',
    },
    {
      fullname: 'Троицкий Дмитрий Викторович',
      phone: '+7 (990) 339-75-17',
      email: 'DmitriyTroitskiy438',
    },
    {
      fullname: 'Соловьев Селиверст Закирович',
      phone: '+7 (946) 714-32-65',
      email: 'SeliverstSolovev911',
    },
    {
      fullname: 'Сомова Василиса Аркадьевна',
      phone: '+7 (924) 836-07-32',
      email: 'VasilisaSomova85',
    },
    {
      fullname: 'Рубенцова Инга Егоровна',
      phone: '+7 (941) 004-05-97',
      email: 'IngaRubentsova763',
    },
  ];

  protected clientsList: Client[] = [];

  protected openDrawer = signal(false);

  constructor(private uApi: UserService) {
    uApi
      .getAll()
      .pipe(finalize(() => console.log(this.clientsList)))
      .subscribe(
        (data) => (this.clientsList = data.length ? data : this.clientsTestData)
      );
  }

  public onClose(): void {
    // if (this.control.pristine) {
    //   this.openDrawer.set(false);

    //   return;
    // }

    this.dialogs
      .open(TUI_CONFIRM, {
        label: 'Cancel editing form?',
        size: 's',
        data: {
          content: 'You have unsaved changes that will be lost',
        },
      })
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.openDrawer.set(false);
        // this.control.reset('Some value');
      });
  }
}
