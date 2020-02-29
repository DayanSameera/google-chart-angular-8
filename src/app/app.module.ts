import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component';
import { ServiceModule } from './google-chart/service/service.module';
import { GoogleChartService } from './google-chart/service/google-chart.service';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { MockDataService } from './services/mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    ComboChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ServiceModule, GoogleChartService, MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
