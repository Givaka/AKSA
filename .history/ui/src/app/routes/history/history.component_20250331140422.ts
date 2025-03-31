import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

}
