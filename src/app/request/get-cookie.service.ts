import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HttpRequestUtil} from "../http/HttpRequestUtil";

@Injectable({
  providedIn: 'root'
})
export class GetCookieService {

  constructor(private httpClient: HttpClient) {
  }

  public setCookieFromServer(): Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(environment.DJANGO_TUTORIALS_SERVE_URL + '/cookie/set_cookie', HttpRequestUtil.getFormOptions());
  }

  public delCookieFromServer(): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.DJANGO_TUTORIALS_SERVE_URL + '/cookie/del_cookie', HttpRequestUtil.getFormOptions());
  }
}
