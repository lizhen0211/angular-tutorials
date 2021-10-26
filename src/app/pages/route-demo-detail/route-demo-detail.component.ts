import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-route-demo-detail',
  templateUrl: './route-demo-detail.component.html',
  styleUrls: ['./route-demo-detail.component.less']
})
export class RouteDemoDetailComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onGoClick(): void {
    // this.router.navigate([''])
    window.history.back();
  }

}
