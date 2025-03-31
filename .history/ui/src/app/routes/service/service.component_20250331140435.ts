import { Component } from '@angular/core';
import { MenuComponent } from '@shared/component/menu/menu.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

}
