import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'options',
  templateUrl: '/app/views/options.component.html',
  directives: [HeaderComponent]
})

export class OptionsComponent {
	angemeldet:boolean = true;
}