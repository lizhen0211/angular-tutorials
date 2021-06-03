import {HttpHeaders, HttpParams} from '@angular/common/http';
import ValueUtil from "../util/value-util";

export class HttpRequestUtil {

  /**
   * URL参数编码
   * @param paramMap
   */
  public static encodeParameters(paramMap: Map<string, string>) {
    let encodedParams: string = '';
    let entries = paramMap.entries();
    for (let [key, value] of entries) {
      if (!ValueUtil.isStrEmpty(key) && !ValueUtil.isStrEmpty(value)) {
        encodedParams += encodeURIComponent(key);
        encodedParams += ('=');
        encodedParams += (encodeURIComponent(value));
        encodedParams += ('&');
      }
    }
    if (encodedParams.length > 0) {
      encodedParams = encodedParams.substring(0, encodedParams.length - 1);
    }
    return encodedParams;
  }

  public static getJsonOptions(observe: string = 'response'): Object {
    const options: any = {};
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/JSON');
    headers = headers.set('Content-Type', 'application/JSON;charset=UTF-8');
    options.headers = headers;

    options.params = new HttpParams();
    options.withCredentials = true;
    options.observe = observe;
    options.responseType = 'json';
    return options;
  }

  public static getFormOptions(observe: string = 'response'): Object {
    const requestOptions: any = {};
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/JSON');
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    requestOptions.headers = headers;

    requestOptions.params = new HttpParams();
    requestOptions.withCredentials = true;
    requestOptions.observe = observe;
    requestOptions.responseType = 'json';
    return requestOptions;
  }
}
