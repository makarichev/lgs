import { Component } from '@angular/core';
import { LgsService } from '../lgs.service';

@Component({
  selector: 'app-home',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  data$: any;
  constructor(private _lgs: LgsService) {
    this.data$ = _lgs.getData();
  }
}
