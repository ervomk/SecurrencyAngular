import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  /**
   * LocalStorage get data and return as parsed.
   * @param key
   * @param returnParsed
   */
  public get(key: string, returnParsed: boolean): any {
    return returnParsed ? JSON.parse(localStorage.getItem(key) as any) : localStorage.getItem(key);
  }

  /**
   * Sets data to storage.
   * @param key
   * @param data
   */
  public set(key: string, data: string) {
    localStorage.setItem(key, data);
  }
}
