import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'overview',
  templateUrl: '/app/views/overview.component.html',
  directives: [HeaderComponent]
})

export class OverviewComponent {
	angemeldet:boolean = true;
}