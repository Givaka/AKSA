import { DecimalPipe, NgForOf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AsideComponent } from '@shared/component/aside/aside.component';
import { MenuComponent } from '@shared/component/menu/menu.component';
import { TuiTable } from '@taiga-ui/addon-table';
import {
  TuiAlertService,
  TuiButton,
  TuiDataList,
  TuiDialogService,
  TuiDropdown,
  TuiHint,
  TuiNumberFormat,
  TuiPopup,
  TuiScrollable,
  TuiScrollbar,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TUI_CONFIRM,
  TuiButtonClose,
  TuiDataListDropdownManager,
  TuiDrawer,
  TuiInputNumber,
} from '@taiga-ui/kit';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/legacy';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Service } from '@shared/data/interface';
import { ServiceService } from '@shared/api/service/service.service';
import { filter, finalize } from 'rxjs';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';

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
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable,
    TuiPopup,
    TuiDrawer,
    TuiInputModule,
    TuiTextfield,
    TuiCurrencyPipe,
    DecimalPipe,
    TuiInputNumber,
    TuiNumberFormat,
    TuiDataList,
    TuiDataListDropdownManager,
    TuiDropdown,
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  protected readonly dialogs = inject(TuiDialogService);
  protected readonly alerts = inject(TuiAlertService);

  protected servicesList: Service[] = [
    {
      title: '10',
      cost: 100,
    },
  ];

  protected openDrawer = signal(false);

  protected newServiceForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    cost: new FormControl(null, Validators.required),
  });

  constructor(private sApi: ServiceService) {
    this.getData();
  }

  getData() {
    this.sApi.getAll().subscribe((data) => (this.servicesList = data));
  }

  protected onClose() {
    if (this.newServiceForm.pristine) {
      this.openDrawer.set(false);
      return;
    }

    this.dialogs
      .open(TUI_CONFIRM, {
        label: 'Отменить добавление услуги?',
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
        this.newServiceForm.reset();
      });
  }

  protected addService() {
    console.log(this.newServiceForm.value);

    if (this.newServiceForm.valid)
      this.sApi
        .create(this.newServiceForm.value)
        .pipe(finalize(() => this.getData()))
        .subscribe((data: any) => {
          this.openDrawer.set(false);
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

  protected deleteService(contextInfo: Service) {
    console.log(contextInfo);

    this.dialogs
      .open(TUI_CONFIRM, {
        label: `Вы хотите удалить ${contextInfo.title}`,
      })
      .subscribe();
  }
}
