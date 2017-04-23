import {Component, ViewChild} from "@angular/core";
import {BaseChartDirective} from "ng2-charts";
@Component({
    selector: 'line-graph',
    template: `
        <div class="details-outer">
        <div class="details-image-container" >
          <canvas baseChart id = "lineChart" width="657" height="379"
                    [datasets] = "lineChartData"
                    [labels] = "lineChartLabels"
                    [legend] = "lineChartLegend"
                    [chartType] = "lineChartType"
                    [colors] = "lineChartColors"
                    [options] = "lineChartOptions"></canvas>
        </div>
        <div class="details-data">
          <label class="accessibility" for="details-log">Letzte Werteänderungen</label>
          <textarea id="details-log" class="detail-logs" placeholder="Gerätelog" readonly rows="6">{{templog}}
          </textarea>
          <div class="details-settings">
            <h3 class="details-headline">Temperatur einstellen</h3>

            <form class="update-form" method="post">
              <label class="update-form-field" id="current-value">
                <span class="current-value">derzeit: {{temp}}</span>
              </label>
              <label class="accessibility" for="new-value">Bitte gewünschten Wert eingeben.</label>
              <input type="number" #tempInput step="0.01" min="0" max="50" id="new-value" value="1"
                     class="update-form-field form-input" name="new-value" required>
              <input type="submit" (click)="onTempChangeClicked(tempInput.value)" id="submit-value" class="update-form-field button" name="submit-value"
                     value="Wert setzen">
            </form>
          </div>
        </div>
      </div>
    `
})

export class LineGraphComponent {
    temp:number = 25;

    templog:string = "6.3.2017 10:01:30: 20 -> 25";

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

    @ViewChild(BaseChartDirective) chart;

    forceChartRefresh(){
        setTimeout(() => {
            this.chart.refresh()
        });
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
}