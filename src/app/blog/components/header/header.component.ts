import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public menuItems: MenuItem[] = [
    {
      name: 'INICIO',
      url: '',
    },
    {
      name: 'BLOG',
      url: '',
    },
    {
      name: 'FORMACIÓN',
      url: '',
    },
    {
      name: 'CONTACTO',
      url: '',
    },
  ]

}
