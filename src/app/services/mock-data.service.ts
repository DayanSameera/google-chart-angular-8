import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  chartdata1: Array<object> = [
    { date: '2/1/20', visited: 30, completed: 9, notCompleted: 21 },
    { date: '2/2/20', visited: 12, completed: 6, notCompleted: 6 },
    { date: '2/3/20', visited: 8, completed: 5, notCompleted: 3 },
    { date: '2/4/20', visited: 15, completed: 8, notCompleted: 7 },
    { date: '2/5/20', visited: 30, completed: 20, notCompleted: 10 },
    { date: '2/6/20', visited: 16, completed: 10, notCompleted: 6 },
  ];

  chartdata2: Array<object> = [
    { date: '3/1/20', visited: 8, completed: 6, notCompleted: 2 },
    { date: '3/2/20', visited: 21, completed: 1, notCompleted: 6 },
    { date: '3/3/20', visited: 8, completed: 5, notCompleted: 3 },
    { date: '3/4/20', visited: 11, completed: 7, notCompleted: 7 },
    { date: '3/5/20', visited: 12, completed: 7, notCompleted: 10 },
    { date: '3/6/20', visited: 34, completed: 10, notCompleted: 6 },
  ];

  chartdata3: Array<object> = [
    { date: '4/1/20', visited: 10, completed: 10, notCompleted: 0 },
    { date: '4/2/20', visited: 13, completed: 6, notCompleted: 7 },
    { date: '4/3/20', visited: 19, completed: 9, notCompleted: 10 },
    { date: '4/4/20', visited: 15, completed: 8, notCompleted: 7 },
    { date: '4/5/20', visited: 20, completed: 2, notCompleted: 18 },
    { date: '4/6/20', visited: 14, completed: 10, notCompleted: 4 },
  ];

  get(clusterID: number) {
    switch (clusterID) {
      case 1:
        return of(this.chartdata1);
        break;

      case 2:
        return of(this.chartdata2);
        break;

      case 3:
        return of(this.chartdata3);
        break;

      default:
        break;
    }
  }

  constructor() { }
}
