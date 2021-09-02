import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpRequestUtil} from "../http/HttpRequestUtil";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) {
  }

  public requestDbConnectionRelease(): Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(environment.DJANGO_TUTORIALS_SERVE_URL + '/db/db_connection_release', HttpRequestUtil.getFormOptions());
  }
}
