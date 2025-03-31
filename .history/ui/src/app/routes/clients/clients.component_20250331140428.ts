import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

}
