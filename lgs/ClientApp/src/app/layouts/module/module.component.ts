import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-layout',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleLayoutComponent implements OnInit {
  @Input() title: any;

  constructor( private _route: ActivatedRoute) {
    _route.data.subscribe(x => this.title = x.title)
  }

  ngOnInit() {
  }

}
