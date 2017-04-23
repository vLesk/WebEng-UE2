import {Component, ViewChild} from "@angular/core";
import {BaseChartDirective} from "ng2-charts";

@Component({
    selector: 'polar-area-graph',
    template: `
        <div class="details-outer">
        <div class="details-image-container">
          <canvas baseChart width="657" height="379"
                  [data]="polarAreaChartData"
                  [labels]="polarAreaChartLabels"
                  [legend]="polarAreaLegend"
                  [chartType]="polarAreaChartType"
                  ></canvas>
        </div>
        <div class="details-data">
          <label class="accessibility" for="details-log">Letzte Werteänderungen</label>
          <textarea id="details-log" class="detail-logs" placeholder="Gerätelog" readonly rows="6">{{statelog}}</textarea>
          <div class="details-settings">
            <h3 class="details-headline">Gerätezustand einstellen</h3>

            <form class="update-form" method="post">
              <label class="update-form-field" id="current-value">
                <span class="current-value">derzeit: {{state}}</span>
              </label>
              <label class="accessibility" for="new-value">Bitte gewünschten Wert aus Menü auswählen.</label>
              <select #stateSelect id="new-value" class="update-form-field form-input" name="new-value" required>
                <option>Aus</option>
                <option>Ein</option>
                <option selected>Standby</option>
              </select>
              <input type="submit" (click) = "onStateChangeClicked(stateSelect.value)" id="submit-value" class="update-form-field button" name="submit-value"
                     value="Wert setzen">
            </form>
          </div>
        </div>
      </div>

    `
})

export class PolarAreaGraphComponent {
    state:string = "Standby";

    statelog:string = "6.3.2017 10:02:32: Ein -> Standby";

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
}