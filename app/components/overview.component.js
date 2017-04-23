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
var OverviewComponent = (function () {
    function OverviewComponent() {
        this.applianceName1 = "Heizkörper Esszimmer";
        this.applianceName2 = "Heizkörper Badezimmer";
        this.applianceName3 = "Beleuchtung Außen";
        this.applianceName4 = "Beleuchtung Küche";
        this.applianceName5 = "Kamera Vordertür";
        this.applianceName6 = "Kamera Wohnzimmer";
        this.applianceName7 = "Rolladen Wohnzimmer";
        this.applianceName8 = "Rolladen Wohnzimmer";
        this.applianceNameActive = [true, true, true, true, true, true, true, true];
        this.angemeldet = true;
    }
    OverviewComponent.prototype.onClickSetName1 = function () {
        this.applianceNameActive[0] = !this.applianceNameActive[0];
    };
    OverviewComponent.prototype.onClickSetName2 = function () {
        this.applianceNameActive[1] = !this.applianceNameActive[1];
    };
    OverviewComponent.prototype.onClickSetName3 = function () {
        this.applianceNameActive[2] = !this.applianceNameActive[2];
    };
    OverviewComponent.prototype.onClickSetName4 = function () {
        this.applianceNameActive[3] = !this.applianceNameActive[3];
    };
    OverviewComponent.prototype.onClickSetName5 = function () {
        this.applianceNameActive[4] = !this.applianceNameActive[4];
    };
    OverviewComponent.prototype.onClickSetName6 = function () {
        this.applianceNameActive[5] = !this.applianceNameActive[5];
    };
    OverviewComponent.prototype.onClickSetName7 = function () {
        this.applianceNameActive[6] = !this.applianceNameActive[6];
    };
    OverviewComponent.prototype.onClickSetName8 = function () {
        this.applianceNameActive[7] = !this.applianceNameActive[7];
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: 'overview',
            templateUrl: '/app/views/overview.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map