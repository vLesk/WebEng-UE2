import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";

import { HeaderComponent } from './header.component';

@Component({
  selector: 'details-component',
  templateUrl: '/app/views/details.component.html'
})

export class DetailsComponent {
    angemeldet:boolean = true;
}