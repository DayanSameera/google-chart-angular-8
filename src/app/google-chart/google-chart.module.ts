import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';



@NgModule({
  declarations: [LineChartComponent, ComboChartComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [LineChartComponent],
  providers : []
})
export class GoogleChartModule { }
