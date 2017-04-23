import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'overview',
  templateUrl: '/app/views/overview.component.html'
})

export class OverviewComponent {

    applianceName1:string = "Heizkörper Esszimmer";

    applianceName2:string = "Heizkörper Badezimmer";

    applianceName3:string = "Beleuchtung Außen";

    applianceName4:string = "Beleuchtung Küche";

    applianceName5:string = "Kamera Vordertür";

    applianceName6:string = "Kamera Wohnzimmer";

    applianceName7:string = "Rolladen Wohnzimmer";

    applianceName8:string = "Rolladen Wohnzimmer";

    applianceNameActive:boolean[] = [true,true,true,true,true,true,true,true];

    angemeldet:boolean = true;

    onClickSetName1(){
        this.applianceNameActive[0] = !this.applianceNameActive[0]
    }

    onClickSetName2(){
        this.applianceNameActive[1] = !this.applianceNameActive[1]
    }

    onClickSetName3(){
        this.applianceNameActive[2] = !this.applianceNameActive[2]
    }

    onClickSetName4(){
        this.applianceNameActive[3] = !this.applianceNameActive[3]
    }

    onClickSetName5(){
        this.applianceNameActive[4] = !this.applianceNameActive[4]
    }

    onClickSetName6(){
        this.applianceNameActive[5] = !this.applianceNameActive[5]
    }

    onClickSetName7(){
        this.applianceNameActive[6] = !this.applianceNameActive[6]
    }

    onClickSetName8(){
        this.applianceNameActive[7] = !this.applianceNameActive[7]
    }
}