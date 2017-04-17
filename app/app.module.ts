import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

import { AppComponent }         from './components/app.component';
import { AnmeldenComponent }    from './components/anmelden.component';

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
      }
    ])
  ],
  declarations: [
    AppComponent,
    AnmeldenComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
