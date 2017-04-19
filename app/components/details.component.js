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
    }
    DetailsComponent.prototype.onTempChangeClicked = function (tempInput) {
        if (tempInput <= 50 && tempInput >= 0) {
            this.temp = tempInput;
        }
    };
    DetailsComponent.prototype.onStateChangeClicked = function (name) {
        this.state = name;
    };
    DetailsComponent.prototype.onOnOffButtonClicked = function (active) {
        if (active == true) {
            this.active = "Aktiviert";
        }
        else {
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