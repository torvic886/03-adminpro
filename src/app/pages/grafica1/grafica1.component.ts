import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  


  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 10, 15, 40 ],
        backgroundColor: ['#00FFF0', '#0BD9B1', '#0CF888']  }
    ]
  };
/*  public doughnutChartType: ChartType = 'doughnut'; 
 */
}
