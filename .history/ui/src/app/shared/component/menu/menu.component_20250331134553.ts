import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { menuList } from '@shared/data/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  protected menuList = menuList;
}
