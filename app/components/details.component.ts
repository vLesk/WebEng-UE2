import {Component} from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: '/app/views/details.component.html'
})

export class DetailsComponent {

    temp:number = 25;

    state:string = "Standby";

    active:string = "Aktiviert";

    templog:string = "6.3.2017 10:01:30: 20 -> 25";

    statelog:string = "6.3.2017 10:02:32: Ein -> Standby";

    activelog:string = "6.3.2017 10:03:30: Aus -> An";

    date:Date = new Date();

    lineChartData:Array<any> = [
        {data: [20,25,16,40,26,20,25], label: 'Verlauf'}
    ];

    lineChartLabels:Array<any> = ['4.3.2017 11:05:40','4.3.2017 13:15:55','5.3.2017 9:00:00',
        '5.3.2017 9:00:00', '5.3.2017 10:44:33', '5.3.2017 21:55:22','6.3.2017 10:01:30'];

    lineChartLegend:boolean = true;

    lineChartOptions:any = {
        responsive: true
    };

    lineChartType:string = 'line';
    //PIIIIIIINK
    lineChartColors:Array<any> = [
        {
            backgroundColor: '4D5360',
            borderColor: '#4D5360',
            pointBackgroundColor: '4D5360',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ]

    onTempChangeClicked(tempInput:number){
        if(tempInput <= 50 && tempInput >= 0 && tempInput != this.temp){
            this.date = new Date(Date.now());
            this.templog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + this.temp
                + " -> " + tempInput;
            this.temp = tempInput
        }
    }

    onStateChangeClicked(name:string){
        if(this.state != name){
            this.date = new Date(Date.now());
            this.statelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + this.state
                + " -> " + name;
            this.state = name
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