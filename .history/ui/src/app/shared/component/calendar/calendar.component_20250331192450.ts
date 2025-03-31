import {
  EventCalendar,
  ICalendar,
  IEventData,
  ru,
} from '@dhx/trial-eventcalendar';
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
import { Service } from '@shared/data/interface';

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

  private serviceList: Service[] = [];
  private events: IEventData[] = [];

  constructor(private sApi: ServiceService) {
    combineLatest([sApi.getAll()]).subscribe(([serviceData]) => {
      this.serviceList = serviceData;
    });

    this.events = getData();
  }

  ngOnInit() {
    this._calendar = new EventCalendar(this.calendar_container.nativeElement, {
      locale: ru,
      date: new Date(Date.now()),
    });

    this._calendar.parse(this.events);
    this.serviceList.forEach((item) => {
      this._calendar.addCalendar({
        calendar: {
          id: item.title,
          label: item.title,
          active: true,
        },
      });
    });

    this._calendar.api.on('add-calendar', (obj: any) => {
      console.log(obj);
    });

    console.log(this._calendar.getCalendar({ id: 2 }));
  }

  ngOnDestroy(): void {
    this._calendar.destructor(); // destruct Event Calendar
  }
}
