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

  constructor(private sApi: ServiceService, private eApi: ScheduleService ) {
    combineLatest([sApi.getAll(), ])
      .pipe(
        finalize(() => {
          this._calendar = new EventCalendar(
            this.calendar_container.nativeElement,
            {
              locale: ru,
              date: new Date(Date.now()),
              calendars: this.calendars,
            }
          );
        })
      )
      .subscribe(([serviceData]) => {
        this.calendars = serviceData.map((item) => {
          return {
            id: item.title,
            label: item.title,
            active: true,
          };
        });

        this.events = 
      });

    this.events = getData();
  }

  ngOnDestroy(): void {
    this._calendar.destructor();
  }
}
