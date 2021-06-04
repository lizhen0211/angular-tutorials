import {Component, OnInit} from '@angular/core';
import {GetCookieService} from "../../request/get-cookie.service";
import {CookieUtil} from "../../util/cookie-util";

@Component({
  selector: 'app-cookie-demo',
  templateUrl: './cookie-demo.component.html',
  styleUrls: ['./cookie-demo.component.less']
})
export class CookieDemoComponent implements OnInit {

  constructor(private getCookieService: GetCookieService) {
  }

  ngOnInit(): void {
  }

  public onSetCookieFromServerClick(): void {
    this.getCookieService.setCookieFromServer().subscribe(res => {
      console.log(res);
      console.log('onSet document.cookie:' + document.cookie);
      let val1 = CookieUtil.getCookieValByKey('hello');
      let val2 = CookieUtil.getCookieValByKey('hello2');
      console.log('val1:' + val1);
      console.log('val2:' + val2);
    }, err => {
      console.log(err);
    })
  }

  public onDelCookieFromServerClick(): void {
    this.getCookieService.delCookieFromServer().subscribe(res => {
      console.log(res);
      console.log('onDel document.cookie:' + document.cookie);
    }, err => {
      console.log(err);
    });
  }
}
