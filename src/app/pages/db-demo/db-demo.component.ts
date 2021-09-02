import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../request/database.service";

@Component({
  selector: 'app-db-demo',
  templateUrl: './db-demo.component.html',
  styleUrls: ['./db-demo.component.less']
})
export class DbDemoComponent implements OnInit {

  constructor(private dabaBaseService: DatabaseService) {
  }

  ngOnInit(): void {
  }

  public onDbConnectionReleaseClick(): void {
    this.dabaBaseService.requestDbConnectionRelease().subscribe(res => {

    }, error => {
    });
  }

}
