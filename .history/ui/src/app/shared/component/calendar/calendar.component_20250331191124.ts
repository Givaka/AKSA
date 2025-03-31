import { EventCalendar } from '@dhx/trial-eventcalendar';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getData } from './data';

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

  ngOnInit() {
    const events = getData(); // initialize data property
    this._calendar = new EventCalendar(this.calendar_container.nativeElement, {
      locale: 'ru'
      events, // apply event data
      date: new Date(2025, 3, 31),
    });

    this._calendar.parse(events);
  }

  ngOnDestroy(): void {
    this._calendar.destructor(); // destruct Event Calendar
  }
}
