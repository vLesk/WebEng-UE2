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
var DetailsComponent = (function () {
    function DetailsComponent() {
        this.temp = 1;
        this.state = "Standby";
        this.active = "Aktiviert";
        this.templog = "6.3.2017 10:01:30: 20 -> 25";
        this.statelog = "6.3.2017 10:02:32: Ein -> Standby";
        this.activelog = "6.3.2017 10:03:30: Aus -> An";
        this.date = new Date();
    }
    DetailsComponent.prototype.onTempChangeClicked = function (tempInput) {
        if (tempInput <= 50 && tempInput >= 0 && tempInput != "" && tempInput != this.temp) {
            this.date = new Date(Date.now());
            this.templog += "\n" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear()
                + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + ": " + this.temp
                + " -> " + tempInput;
            this.temp = tempInput;
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