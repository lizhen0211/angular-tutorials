export class CookieUtil {

  public static getCookieValByKey(key: string): string {
    let result: string = '';
    const items = document.cookie.split(';');
    for (let i = 0; i < items.length; i++) {
      const temp = items[i].split('=');
      if (temp[0] && temp[0].trim() == key) {
        result = temp[1];
        break;
      }
    }
    return decodeURI(result);
  }
}
