import { Component } from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: '/app/views/details.component.html'
})

export class DetailsComponent {
    temp:number = 1;

    state:string = "Standby";

    active:string = "Aktiviert";

    onTempChangeClicked(tempInput:number){
        if(tempInput <= 50 && tempInput >= 0){
            this.temp = tempInput
        }
    }

    onStateChangeClicked(name:string){
        this.state = name
    }

    onOnOffButtonClicked(active:boolean){
        if(active == true){
            this.active = "Aktiviert"
        } else {
            this.active = "Deaktiviert"
        }
    }
}