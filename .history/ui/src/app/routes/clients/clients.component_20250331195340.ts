import { Component, inject, signal } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';
import {
  TuiAlertService,
  TuiButton,
  TuiDataList,
  TuiDialogService,
  TuiDropdown,
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
import { Client, Request } from '@shared/data/interface';
import { UserService } from '@shared/api/user/user.service';
import { NgForOf } from '@angular/common';
import { filter, finalize } from 'rxjs';
import { AsideComponent } from '../../shared/component/aside/aside.component';
import {
  TUI_CONFIRM,
  TuiButtonClose,
  TuiDataListDropdownManager,
  TuiDrawer,
} from '@taiga-ui/kit';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    MenuComponent,
    AsideComponent,
    ReactiveFormsModule,
    NgForOf,
    TuiHint,
    TuiButton,
    TuiButtonClose,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable,
    TuiPopup,
    TuiDrawer,
    TuiInputModule,
    TuiTextfield,
    TuiInputPhoneModule,
    TuiDataList,
    TuiDataListDropdownManager,
    TuiDropdown,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  protected readonly dialogs = inject(TuiDialogService);
  protected readonly alerts = inject(TuiAlertService);

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
  protected stageDrawer = signal(false);

  protected newClientForm: FormGroup = new FormGroup({
    fullname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    phone: new FormControl(null),
  });

  constructor(private uApi: UserService) {
    this.getData();
  }

  getData() {
    this.uApi
      .getAll()
      .subscribe(
        (data) => (this.clientsList = data.length ? data : this.clientsTestData)
      );
  }

  protected onClose() {
    if (this.newClientForm.pristine) {
      this.openDrawer.set(false);
      return;
    }

    this.dialogs
      .open(TUI_CONFIRM, {
        label: 'Отменить добавление пользователя?',
        size: 's',
        data: {
          content: 'При выходе указанные данные будут потерянны',
          yes: 'Да',
          no: 'Нет',
        },
      })
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.openDrawer.set(false);
        this.newClientForm.reset();
      });
  }

  protected addClient() {
    this.openDrawer.set(true);
    this.stageDrawer.set(false);

    this.newClientForm.reset();
  }

  protected createClient() {
    if (this.newClientForm.valid)
      this.uApi.create(this.newClientForm.value).subscribe(() => {
        this.openDrawer.set(false);
        this.getData();
      });
    else
      this.alerts
        .open('Заполните все необходимые поля', {
          label: 'Ошибка валидации',
          appearance: 'warning',
        })
        .subscribe();
  }

  protected changeClient(contextInfo: Client) {
    this.newClientForm.setValue(contextInfo);

    this.stageDrawer.set(true);
    this.openDrawer.set(true);
  }

  protected editClient() {
    if (this.newClientForm.pristine) {
      this.openDrawer.set(false);
      return;
    } else {
      if (this.newClientForm.valid)
        this.uApi
          .change(this.newClientForm.value.id, this.newClientForm.value)
          .pipe(finalize(() => this.getData()))
          .subscribe((data: Request) => {
            this.openDrawer.set(false);
            this.getData();
            this.alerts
              .open(data.message, {
                label: data.title,
                appearance: data.status,
              })
              .subscribe();
          });
      else
        this.alerts
          .open('Заполните все необходимые поля', {
            label: 'Ошибка валидации',
            appearance: 'warning',
          })
          .subscribe();
    }
  }
}
