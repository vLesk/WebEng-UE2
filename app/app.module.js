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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ng2_charts_1 = require('ng2-charts');
var router_1 = require('@angular/router');
var app_component_1 = require('./components/app.component');
var anmelden_component_1 = require('./components/anmelden.component');
var overview_component_1 = require('./components/overview.component');
var options_component_1 = require('./components/options.component');
var details_component_1 = require('./components/details.component');
var footer_component_1 = require('./components/footer.component');
var header_component_1 = require('./components/header.component');
var aside_component_1 = require('./components/aside.component');
var linegraph_component_1 = require("./components/linegraph.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/anmelden',
                        pathMatch: 'full'
                    },
                    {
                        path: 'anmelden',
                        component: anmelden_component_1.AnmeldenComponent
                    },
                    {
                        path: 'overview',
                        component: overview_component_1.OverviewComponent
                    },
                    {
                        path: 'options',
                        component: options_component_1.OptionsComponent
                    },
                    {
                        path: 'details',
                        component: details_component_1.DetailsComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                anmelden_component_1.AnmeldenComponent,
                overview_component_1.OverviewComponent,
                options_component_1.OptionsComponent,
                details_component_1.DetailsComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                aside_component_1.AsideComponent,
                linegraph_component_1.LineGraphComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map