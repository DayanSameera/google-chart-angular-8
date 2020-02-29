import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.scss']
})

export class ComboChartComponent implements OnInit {

  constructor(private mockChartDataService: MockDataService, private gChartService: GoogleChartService) {
   // TODO:get the cluster count 
    var clusterCount = 3;

    for (let index = 1; index <= clusterCount; index++) {
      var chartData: Array<object>;

      // calls the api get method with the cluster id. index == clusterId
      this.mockChartDataService.get(index).subscribe(res => {
        chartData = res;
      });

      // draws the chart and appends it to the div. e.g. cluster1, cluter2 etc. these dives are defined in the component html.
      // if you need to create these divs dynamically, chk for dynamic div append for dom.
      this.drawChart(gChartService, chartData, "cluster" + index);
    }
  }

  ngOnInit(): void {
  }

  private drawChart(google: GoogleChartService, chartData: object[], divName: string) {

    // creates the google chart instance
    var gLib = this.gChartService.getGoogle();
    gLib.charts.load('current', {
      callback: drawChart,
      packages: ['corechart']
    });

    function drawChart() {
      // chartoptions
      var options = {
        title: 'Monthly Clusters',
        vAxis: { title: 'Houses' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
      };

      // creates the data table from jason array (api response) to feed into the google chart
      var chartTableData = [];

      if (chartData.length > 0) {

        var colHead = [];
        Object.keys(chartData[0]).forEach(function (key) {
          colHead.push(key);
        });
        chartTableData.push(colHead);

        // load data rows
        chartData.forEach(function (row) {
          var gglRow = [];
          Object.keys(row).forEach(function (key) {
            gglRow.push(row[key]);
          });
          chartTableData.push(gglRow);
        });
      }

      var data = gLib.visualization.arrayToDataTable(chartTableData);
      // get the different div to append the chart.
      var table = new gLib.visualization.ComboChart(document.getElementById(divName));
      table.draw(data, options);
    }
  }
}
