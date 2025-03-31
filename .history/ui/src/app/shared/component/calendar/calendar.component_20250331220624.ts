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
import { Client, Schedule, Service } from '@shared/data/interface';
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
  private services: IOption[] = [];

  private clientList: Client[] = [];
  private serviceList: Service[] = [];

  constructor(
    private sApi: ServiceService,
    private eApi: ScheduleService,
    private cApi: UserService
  ) {
    combineLatest([sApi.getAll(), eApi.get(), cApi.getAll()])
      .pipe(
        finalize(() => {
          console.log(this.events);

          this._calendar = new EventCalendar(
            this.calendar_container.nativeElement,
            {
              locale: ru,
              date: new Date(Date.now()),
              calendars: this.calendars,
              events: this.events,
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

            this.createSchedule({
              id: obj.event.id.replace('temp://', ''),
              user: obj.event.user,
              text: obj.event.text,
              type: obj.event.type,
              start_date: obj.event.start_date,
              end_date: obj.event.end_date,
            });

            return true;
          });

          this._calendar.api.on('delete-event', (obj: any) => {
            eApi.delate(obj.id).subscribe();
          });

          this._calendar.api.on('update-event', (obj: any) => {
            this.updateSchedule({
              id: obj.event.id.replace('temp://', ''),
              user: obj.event.user,
              text: obj.event.text,
              type: obj.event.type,
              start_date: obj.event.start_date,
              end_date: obj.event.end_date,
            });
          });
        })
      )
      .subscribe(([serviceData, eventsData, clientsData]) => {
        this.clientList = clientsData;
        this.serviceList = serviceData;

        this.calendars = serviceData.map((item) => {
          return {
            id: item.title,
            label: item.title,
            active: true,
          };
        });

        this.services = serviceData.map((item: Service, index: number) => {
          return {
            id: index,
            label: item.title,
          };
        });

        this.clients = clientsData.map((item: Client, index: number) => {
          return {
            id: index,
            label: item.fullname,
          };
        });

        this.events = eventsData.map((item, index: number) => {
          return {
            id: item.id,
            type: item.type,
            user: this.clientList
              .map((user) => user.fullname)
              .indexOf(item.user ?? ''),
            text: item.text,
            start_date: new Date(parseInt(item.start_date)),
            end_date: new Date(parseInt(item.end_date)),
          };
        });
      });

    this.events = getData();
  }

  ngOnDestroy(): void {
    this._calendar.destructor();
  }

  createSchedule(data: any) {
    const reqData: Schedule = {
      scheduleId: data.id,
      userId: this.clientList[data.user].uuid,
      type: this.serviceList.filter((service) => service.title === data.type)[0]
        .id,
      text: data.text,
      start_date: data.start_date.getTime(),
      end_date: data.end_date.getTime(),
    };

    this.eApi.create(reqData).subscribe();
  }

  updateSchedule(data: any) {
    const reqData: Schedule = {
      userId: this.clientList[data.user].uuid,
      type: this.serviceList.filter((service) => service.title === data.type)[0]
        .id,
      text: data.text,
      start_date: data.start_date.getTime(),
      end_date: data.end_date.getTime(),
    };

    this.eApi.change(data.id, reqData).subscribe();
  }
}
