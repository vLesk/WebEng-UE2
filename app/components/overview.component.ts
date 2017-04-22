import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'overview',
  templateUrl: '/app/views/overview.component.html'
})

export class OverviewComponent {
	angemeldet:boolean = true;
}