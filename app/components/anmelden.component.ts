import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'anmelden',
  templateUrl: '/app/views/anmelden.component.html'
})

export class AnmeldenComponent {
	angemeldet:boolean = false;

	anmelden() {
		this.angemeldet = true;
	}
}