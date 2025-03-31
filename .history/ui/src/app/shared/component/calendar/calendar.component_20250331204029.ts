import {
  EventCalendar,
  ICalendar,
  IEventData,
  IOption,
  ru,
} from '@dhx/trial-eventcalendar';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { getData } from './data';
import { ServiceService } from '@shared/api/service/service.service';
import { combineLatest, finalize } from 'rxjs';
import { Client, Service } from '@shared/data/interface';
import { ScheduleService } from '@shared/api/schedule/schedule.service';
import { UserService } from '@shared/api/user/user.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnDestroy {
  @ViewChild('container', { static: true }) calendar_container!: ElementRef;

  private _calendar!: EventCalendar;

  private calendars: ICalendar[] = [];
  private events: IEventData[] = [];
  private clients: IOption[] = [];

  constructor(
    private sApi: ServiceService,
    private eApi: ScheduleService,
    private cApi: UserService
  ) {
    combineLatest([sApi.getAll(), eApi.get(), cApi.getAll()])
      .pipe(
        finalize(() => {
          this._calendar = new EventCalendar(
            this.calendar_container.nativeElement,
            {
              locale: ru,
              date: new Date(Date.now()),
              calendars: this.calendars,
              editorShape: [
                {
                  key: 'text',
                  type: 'text',
                  label: 'Текст записи',
                  config: {
                    placeholder: 'Новая запись',
                  },
                },
                {
                  type: 'combo',
                  key: 'user',
                  options: this.clients,
                  label: 'Клиент',
                  config: {
                    placeholder: 'ФИО клинта',
                  },
                },
                {
                  type: 'date',
                  key: 'start_date',
                  label: 'Start date',
                  time: true,
                },
                {
                  type: 'date',
                  key: 'end_date',
                  label: 'End date',
                  time: true,
                },
                {
                  type: 'combo',
                  key: 'type',
                  label: 'Услуга',
                },
                {
                  type: 'recurring',
                  key: 'recurring',
                  label: 'Повторение',
                },
              ],
            }
          );

          this._calendar.api.intercept('add-event', (obj: any) => {
            if (
              obj.event.text === '' ||
              obj.event.type === '' ||
              obj.event.user === ''
            ) {
              return false;
            }
            console.log({
              id: obj.event.id,
              user: obj.event.user,
              service: obj.event.type,
              start_date: obj.event.start_date.toJSON(),
              end_date: obj.event.end_date.toJSON(),
            });

            return true;
          });
        })
      )
      .subscribe(([serviceData, eventsData, clientsData]) => {
        this.calendars = serviceData.map((item) => {
          return {
            id: item.title,
            label: item.title,
            active: true,
          };
        });

        this.events = eventsData.map((item) => {
          return {
            id: item.id,
            type: item.type,
            text: item.text,
            start_date: new Date(item.start_date),
            end_date: new Date(item.end_date),
          };
        });

        this.clients = clientsData.map((item: Client, index: number) => {
          return {
            id: index,
            label: item.fullname,
          };
        });
      });

    this.events = getData();
  }

  ngOnDestroy(): void {
    this._calendar.destructor();
  }
}
