import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-route-demo',
  templateUrl: './route-demo.component.html',
  styleUrls: ['./route-demo.component.less']
})
export class RouteDemoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onGoClick(): void {
    this.router.navigate(['route-detail'])
  }

}
