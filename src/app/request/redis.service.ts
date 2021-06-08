import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpRequestUtil} from "../http/HttpRequestUtil";

@Injectable({
  providedIn: 'root'
})
export class RedisService {

  constructor(private httpClient: HttpClient) {
  }

  public setRedisCache(): Observable<HttpResponse<any>> {
    return this.httpClient.post<HttpResponse<any>>(environment.DJANGO_TUTORIALS_SERVE_URL + '/redis/set_cache', HttpRequestUtil.getFormOptions());
  }

  public getRedisCache(): Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(environment.DJANGO_TUTORIALS_SERVE_URL + '/redis/get_cache', HttpRequestUtil.getFormOptions());
  }
}
