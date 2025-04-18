import { NgForOf } from '@angular/common';
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
  TuiDialogService,
  TuiHint,
  TuiPopup,
  TuiScrollable,
  TuiScrollbar,
  TuiTextfield,
} from '@taiga-ui/core';
import { TUI_CONFIRM, TuiButtonClose, TuiDrawer } from '@taiga-ui/kit';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/legacy';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Service } from '@shared/data/interface';
import { ServiceService } from '@shared/api/service/service.service';

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
    TuiInputPhoneModule,
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  protected readonly dialogs = inject(TuiDialogService);
  protected readonly alerts = inject(TuiAlertService);

  protected servicesList: Service[] = [];

  protected openDrawer = signal(false);

  protected newClientForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    cost: new FormControl(0, Validators.required),
  });

  constructor(private sApi: ServiceService) {
    
  }

  protected onClose() {
      if (this.newClientForm.pristine) {
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
          this.newClientForm.reset();
        });
    }
  
    protected addClient() {
      if (this.newClientForm.valid)
        this.uApi
          .create(this.newClientForm.value)
          .subscribe(() => this.openDrawer.set(false));
      else
        this.alerts
          .open('Заполните все необходимые поля', {
            label: 'Ошибка валидации',
            appearance: 'warning',
          })
          .subscribe();
    }
}
