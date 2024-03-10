import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pago-prompt-web';
  imageSrc: string = '../assets/menu/logout.png';

  constructor(public authenticationService: AuthenticationService) { }

  changeImage(image: string) {
    this.imageSrc = '../assets/menu/' + image;
  }

  logout() {
    this.authenticationService.logout();
  }
}
