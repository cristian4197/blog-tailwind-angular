import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardsComponent } from './components/cards/cards.component';
import { Course } from './interfaces/course';
import { AsideComponent } from './components/aside/aside.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    CardsComponent,
    AsideComponent,
    ArticlesComponent,
    FooterComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export default class BlogComponent {
  public courses:Course[] = [
    {
      logo: 'H',
      title: 'Desarrollo',
      description: 'Descripción del curso'
    },
    {
      logo: '_',
      title: 'Desarrollo',
      description: 'Descripción del curso'
    },
    {
      logo: 'S',
      title: 'Desarrollo',
      description: 'Descripción del curso'
    },
    {
      logo: 'u',
      title: 'Desarrollo',
      description: 'Descripción del curso'
    },
    {
      logo: 'a',
      title: 'Desarrollo',
      description: 'Descripción del curso'
    },
  ];
}
