import {Component, ViewChild} from "@angular/core";
import {BaseChartDirective} from "ng2-charts";

@Component({
    selector: 'doughnut-graph',
    template: `<div class="details-outer">
        <div class="details-image-container">
          <canvas baseChart
                  [data]="doughnutChartData"
                  [labels]="doughnutChartLabels"
                  [chartType]="doughnutChartType"></canvas>
        </div>
        <div class="details-data">
          <label class="accessibility" for="details-log">Letzte Werteänderungen</label>
          <textarea id="details-log" class="detail-logs" placeholder="Gerätelog" readonly rows="6">{{activelog}}</textarea>
          <div class="details-settings">
            <h3 class="details-headline">Ein-/Ausschalten</h3>

            <form class="update-form" method="post">

              <label class="update-form-field" id="current-value">
                <span class="current-value">derzeit: {{active}}</span>
              </label>

              <label class="accessibility" for="new-value">Bitte gewünschten Wert auswählen.</label>
              <input type="checkbox" #deviceOnOff id="new-value" class="update-checkbox-input form-input" checked
                     name="new-value">
              <input type="submit" (click)="onOnOffButtonClicked(deviceOnOff.checked)"  id="submit-value" class="update-form-field button" name="submit-value"
                     value="Wert setzen">
            </form>
          </div>
        </div>
      </div>`
})

export class DoughnutGraphComponent{
    active:string = "Aktiviert";

    activelog:string = "6.3.2017 10:03:30: Aus -> An";

    date:Date = new Date();

    @ViewChild(BaseChartDirective) chart;

    forceChartRefresh(){
        setTimeout(() => {
            this.chart.refresh()
        });
    }

    doughnutChartLabels:string[] = ['An', 'Aus'];
    doughnutChartData:number[] = [1,2];
    doughnutChartType:string = 'doughnut';

    onOnOffButtonClicked(active:boolean){
        if(active == true){
            if(this.active == "Deaktiviert"){
                this.date = new Date(Date.now());
                this.activelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                    + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + "Aus"
                    + " -> " + "An";
                this.doughnutChartData[0]++;
                this.forceChartRefresh();
            }
            this.active = "Aktiviert"
        } else {
            if(this.active == "Aktiviert"){
                this.date = new Date(Date.now());
                this.activelog += "\n" + this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear()
                    + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() +": " + "An"
                    + " -> " + "Aus";
                this.doughnutChartData[1]++;
                this.forceChartRefresh();
            }
            this.active = "Deaktiviert"
        }
    }
}