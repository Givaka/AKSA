import { Component } from '@angular/core';
import { CalendarComponent } from '@shared/component/calendar/calendar.component';
import { MenuComponent } from '@shared/component/menu/menu.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [MenuComponent, CalendarComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {}
