import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-route-demo',
  templateUrl: './route-demo.component.html',
  styleUrls: ['./route-demo.component.less']
})
export class RouteDemoComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  // @ts-ignore
  private routerSubscription: Subscription;

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(res => {
        // @ts-ignore
        if (res.url == '/route-detail') {
          this.activatedRoute.snapshot.data.iskeep = true;
        } else {
          this.activatedRoute.snapshot.data.iskeep = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  public onGoClick(): void {
    this.router.navigate(['route-detail'])
  }

}
