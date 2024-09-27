import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CardSocialMediaComponent } from '../card-social-media/card-social-media.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    LoginComponent,
    CardSocialMediaComponent,
    SponsorsComponent,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
