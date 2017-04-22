import { Component, Input } from '@angular/core';
import { AnmeldenComponent } from './anmelden.component';
import { AppComponent }         from './app.component';

@Component({
  selector: 'header',
  templateUrl: '/app/views/header.component.html'
})

export class HeaderComponent {
	@Input() angemeldet:boolean;
}