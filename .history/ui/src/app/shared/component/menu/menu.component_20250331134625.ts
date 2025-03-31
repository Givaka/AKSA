import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { menuList } from '@shared/data/menu';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, TuiButton],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  protected menuList = menuList;
}
