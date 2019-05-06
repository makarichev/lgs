import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id: any;

  constructor( private _route: ActivatedRoute) {

    _route.params.subscribe(x => this.id = x.orderId)
  }

  ngOnInit() {
  }

}
