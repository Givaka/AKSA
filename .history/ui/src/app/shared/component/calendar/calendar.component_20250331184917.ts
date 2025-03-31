import { EventCalendar } from '@dhx/trial-eventcalendar';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

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
    // initialize the Event Calendar component
    this._calendar = new EventCalendar(
      this.calendar_container.nativeElement,
      {}
    );
  }

  ngOnDestroy(): void {
    this._calendar.destructor(); // destruct Event Calendar
  }
}
