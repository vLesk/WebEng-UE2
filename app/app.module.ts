import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

import { AppComponent }         from './components/app.component';
import { AnmeldenComponent }    from './components/anmelden.component';
import { OverviewComponent }    from './components/overview.component';
import { OptionsComponent }    from './components/options.component';
import { DetailsComponent }    from './components/details.component';
import { FooterComponent }    from './components/footer.component';
import { HeaderComponent }    from './components/header.component';
import { AsideComponent }    from './components/aside.component';
import {LineGraphComponent} from "./components/linegraph.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/anmelden',
        pathMatch: 'full'
      },
      {
        path: 'anmelden',
        component: AnmeldenComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'options',
        component: OptionsComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    AnmeldenComponent,
    OverviewComponent,
    OptionsComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    LineGraphComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
