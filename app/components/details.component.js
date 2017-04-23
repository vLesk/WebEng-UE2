"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_charts_1 = require("ng2-charts");
var DetailsComponent = (function () {
    function DetailsComponent() {
        this.angemeldet = true;
        this.state = "Standby";
        this.active = "Aktiviert";
        this.statelog = "6.3.2017 10:02:32: Ein -> Standby";
        this.activelog = "6.3.2017 10:03:30: Aus -> An";
        this.date = new Date();
        this.polarAreaChartLabels = ['Aus', 'Ein', 'Standby'];
        this.polarAreaChartData = [3, 3, 2];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.doughnutChartLabels = ['An', 'Aus'];
        this.doughnutChartData = [50, 70];
        this.doughnutChartType = 'doughnut';
    }
    DetailsComponent.prototype.forceChartRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this.chart.refresh();
        });
    };
    DetailsComponent.prototype.onStateChangeClicked = function (name) {
        if (this.state != name) {
            this.date = new Date(Date.now());
            this.statelog += "\n" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + ": " + this.state
                + " -> " + name;
            this.state = name;
            if (name == "Aus") {
                this.polarAreaChartData[0]++;
            }
            else if (name == "Ein") {
                this.polarAreaChartData[1]++;
            }
            else {
                this.polarAreaChartData[2]++;
            }
            this.forceChartRefresh();
        }
    };
    DetailsComponent.prototype.onOnOffButtonClicked = function (active) {
        if (active == true) {
            if (this.active == "Deaktiviert") {
                this.date = new Date(Date.now());
                this.activelog += "\n" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear()
                    + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + ": " + "Aus"
                    + " -> " + "An";
            }
            this.active = "Aktiviert";
        }
        else {
            if (this.active == "Aktiviert") {
                this.date = new Date(Date.now());
                this.activelog += "\n" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear()
                    + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + ": " + "An"
                    + " -> " + "Aus";
            }
            this.active = "Deaktiviert";
        }
    };
    __decorate([
        core_1.ViewChild(ng2_charts_1.BaseChartDirective), 
        __metadata('design:type', Object)
    ], DetailsComponent.prototype, "chart", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-component',
            templateUrl: '/app/views/details.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map