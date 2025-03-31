import {
  EventCalendar,
  ICalendar,
  IEventData,
  ru,
} from '@dhx/trial-eventcalendar';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { getData } from './data';
import { ServiceService } from '@shared/api/service/service.service';
import { combineLatest, finalize } from 'rxjs';
import { Service } from '@shared/data/interface';
import { ScheduleService } from '@shared/api/schedule/schedule.service';

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

  constructor(private sApi: ServiceService, private eApi: ScheduleService) {
    combineLatest([sApi.getAll(), eApi.get()])
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
                  type: 'combo',
                  key: 'users',
                  label: 'Event name',
                  config: {
                    placeholder: 'New event',
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
              ],
            }
          );
        })
      )
      .subscribe(([serviceData, eventsData]) => {
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
      });

    this.events = getData();
  }

  ngOnDestroy(): void {
    this._calendar.destructor();
  }
}
