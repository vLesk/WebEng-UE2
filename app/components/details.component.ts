import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";

import { HeaderComponent } from './header.component';

@Component({
  selector: 'details-component',
  templateUrl: '/app/views/details.component.html'
})

export class DetailsComponent {
    angemeldet:boolean = true;

    state:string = "Standby";

    active:string = "Aktiviert";

    statelog:string = "6.3.2017 10:02:32: Ein -> Standby";

    activelog:string = "6.3.2017 10:03:30: Aus -> An";

    date:Date = new Date();



    @ViewChild(BaseChartDirective) chart;

    forceChartRefresh(){
        setTimeout(() => {
            this.chart.refresh()
        });
    }

    polarAreaChartLabels:string[] = ['Aus','Ein','Standby'];

    polarAreaChartData:number[] = [3,3,2];

    polarAreaLegend:boolean = true;

    polarAreaChartType:string = 'polarArea';

    doughnutChartLabels:string[] = ['An', 'Aus'];
    doughnutChartData:number[] = [50,70];
    doughnutChartType:string = 'doughnut';

    onStateChangeClicked(name:string){
        if(this.state != name){
            this.date = new Date(Date.now());
            this.statelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + this.state
                + " -> " + name;
            this.state = name;

            if(name == "Aus"){
                this.polarAreaChartData[0]++;
            } else if(name == "Ein"){
                this.polarAreaChartData[1]++;
            } else {
                this.polarAreaChartData[2]++;
            }

            this.forceChartRefresh();
        }
    }

    onOnOffButtonClicked(active:boolean){
        if(active == true){
            if(this.active == "Deaktiviert"){
                this.date = new Date(Date.now());
                this.activelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                    + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + "Aus"
                    + " -> " + "An";
            }
            this.active = "Aktiviert"
        } else {
            if(this.active == "Aktiviert"){
                this.date = new Date(Date.now());
                this.activelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                    + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + "An"
                    + " -> " + "Aus";
            }
            this.active = "Deaktiviert"
        }
    }
}