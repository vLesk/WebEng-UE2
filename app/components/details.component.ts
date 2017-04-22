import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";

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

    tempChangeTimeString:string = "";

    date:Date = new Date();

    lineChartData:Array<any> = [
        {data: [20,25,16,40,26,20,25], label: 'Verlauf'}
    ];


    lineChartLabels:Array<any> = ['4.3.2017 11:05:40','4.3.2017 13:15:55','5.3.2017 9:00:00',
        '5.3.2017 9:00:00', '5.3.2017 10:44:33', '5.3.2017 21:55:22','6.3.2017 10:01:30'];


    lineChartLegend:boolean = true;

    lineChartOptions:any = {
        responsive: true,
        autoSkip: false
    };

    lineChartType:string = 'line';


    lineChartColors:Array<any> = [
        {
            backgroundColor: 'rgba(205,209,216,0.4)',
            borderColor: '#4D5360',
            pointBackgroundColor: '#4D5360',
            pointBorderColor: '#F1F3F8',
            pointHoverBackgroundColor: '#4D5360',
            pointHoverBorderColor: '#4D5360'
        }
    ];

    @ViewChild(BaseChartDirective) private _chart;

    forceChartRefresh() {
        setTimeout(() => {
            this._chart.refresh();
        }, 10);
    }

    onTempChangeClicked(tempInput:number){
        if(tempInput <= 50 && tempInput >= 0 && tempInput != this.temp){
            this.date = new Date(Date.now());
            this.tempChangeTimeString = this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
            this.templog += "\n" + this.tempChangeTimeString +": " + this.temp
                + " -> " + tempInput;
            this.temp = tempInput;

            let tempVals:Array<any> = [
                {data: new Array(this.lineChartData[0].data.length+1),label: "Verlauf"}
            ];

            let tempLabels:Array<any> = new Array(this.lineChartLabels.length+1);

            for(let i = 0; i < this.lineChartData[0].data.length; i++){
                tempVals[0].data[i] = this.lineChartData[0].data[i];
            }

            tempVals[0].data[this.lineChartData[0].data.length] = tempInput;


            for(let i = 0; i < this.lineChartLabels.length; i++){
                tempLabels[i] = this.lineChartLabels[i];
            }

            tempLabels[this.lineChartLabels.length] = this.tempChangeTimeString;


            this.lineChartLabels = tempLabels;
            this.lineChartData = tempVals;

            this.forceChartRefresh();
        }
    }

    onStateChangeClicked(name:string){
        if(this.state != name){
            this.date = new Date(Date.now());
            this.statelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + this.state
                + " -> " + name;
            this.state = name;
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