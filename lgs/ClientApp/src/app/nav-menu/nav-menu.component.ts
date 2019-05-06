import { Component } from '@angular/core';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isExpanded = false;
  title: any = "Логистика";


  constructor(private _router: Router) {

      _router.events.pipe(
        filter(x => x instanceof NavigationEnd),
        tap(x => console.log(_router))

      ).subscribe(
        x => this.title = 'asdfasdf'
        );
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
