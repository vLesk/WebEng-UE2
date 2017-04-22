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
        this.temp = 25;
        this.state = "Standby";
        this.active = "Aktiviert";
        this.templog = "6.3.2017 10:01:30: 20 -> 25";
        this.statelog = "6.3.2017 10:02:32: Ein -> Standby";
        this.activelog = "6.3.2017 10:03:30: Aus -> An";
        this.tempChangeTimeString = "";
        this.date = new Date();
        this.lineChartData = [
            { data: [20, 25, 16, 40, 26, 20, 25], label: 'Verlauf' }
        ];
        this.lineChartLabels = ['4.3.2017 11:05:40', '4.3.2017 13:15:55', '5.3.2017 9:00:00',
            '5.3.2017 9:00:00', '5.3.2017 10:44:33', '5.3.2017 21:55:22', '6.3.2017 10:01:30'];
        this.lineChartLegend = true;
        this.lineChartOptions = {
            responsive: true,
            autoSkip: false
        };
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(205,209,216,0.4)',
                borderColor: '#4D5360',
                pointBackgroundColor: '#4D5360',
                pointBorderColor: '#F1F3F8',
                pointHoverBackgroundColor: '#4D5360',
                pointHoverBorderColor: '#4D5360'
            }
        ];
    }
    DetailsComponent.prototype.forceChartRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this._chart.refresh();
        }, 10);
    };
    DetailsComponent.prototype.onTempChangeClicked = function (tempInput) {
        if (tempInput <= 50 && tempInput >= 0 && tempInput != this.temp) {
            this.date = new Date(Date.now());
            this.tempChangeTimeString = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
            this.templog += "\n" + this.tempChangeTimeString + ": " + this.temp
                + " -> " + tempInput;
            this.temp = tempInput;
            var tempVals = [
                { data: new Array(this.lineChartData[0].data.length + 1), label: "Verlauf" }
            ];
            var tempLabels = new Array(this.lineChartLabels.length + 1);
            for (var i = 0; i < this.lineChartData[0].data.length; i++) {
                tempVals[0].data[i] = this.lineChartData[0].data[i];
            }
            tempVals[0].data[this.lineChartData[0].data.length] = tempInput;
            for (var i = 0; i < this.lineChartLabels.length; i++) {
                tempLabels[i] = this.lineChartLabels[i];
            }
            tempLabels[this.lineChartLabels.length] = this.tempChangeTimeString;
            this.lineChartLabels = tempLabels;
            this.lineChartData = tempVals;
            this.forceChartRefresh();
        }
    };
    DetailsComponent.prototype.onStateChangeClicked = function (name) {
        if (this.state != name) {
            this.date = new Date(Date.now());
            this.statelog += "\n" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + ": " + this.state
                + " -> " + name;
            this.state = name;
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
    ], DetailsComponent.prototype, "_chart", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details',
            templateUrl: '/app/views/details.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map