import { EventCalendar, ICalendar, ru } from '@dhx/trial-eventcalendar';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getData } from './data';
import { ServiceService } from '@shared/api/service/service.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) calendar_container!: ElementRef;

  private _calendar!: EventCalendar;

  private calendars: ICalendar[] | undefined = [];

  constructor(private sApi: ServiceService) {
    combineLatest([sApi.getAll()]).subscribe(([serviceData]) => {
      serviceData.forEach((item) => {
        this.calendars?.push({
          id: <string>item.id,
          label: item.title,
          active: true,
        });
      });
    });
  }

  ngOnInit() {
    const events = getData(); // initialize data property
    this._calendar = new EventCalendar(this.calendar_container.nativeElement, {
      locale: ru,
      date: new Date(Date.now()),
      calendars: this.calendars,
      events, // apply event data
    });

    this._calendar.parse(events);
  }

  ngOnDestroy(): void {
    this._calendar.destructor(); // destruct Event Calendar
  }
}
