import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
