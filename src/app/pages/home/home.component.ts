import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onCookieClick(): void {
    this.router.navigate(['cookie'])
  }

  public onRedisClick(): void {
    this.router.navigate(['redis'])
  }

  public onProvidersClick(): void {
    this.router.navigate(['prodivers'])
  }
}
