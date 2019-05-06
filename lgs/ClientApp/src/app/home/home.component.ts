import { Component } from '@angular/core';
import { LgsService } from '../lgs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  data$: any;
  constructor(private _lgs: LgsService) {
    this.data$ = _lgs.getData();
  }
}
