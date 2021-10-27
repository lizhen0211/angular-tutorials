import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-route-demo',
  templateUrl: './route-demo.component.html',
  styleUrls: ['./route-demo.component.less']
})
export class RouteDemoComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events
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

  public onGoClick(): void {
    this.router.navigate(['route-detail'])
  }

}
