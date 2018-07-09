import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatWindowMsgsService {

  url = 'http://localhost:3000';
  constructor(private _http: HttpClient) { }

  getChatWindowData() {
    return this._http.get<any>(this.url + '/chatWindowData');
  }
  getChatWindowDataById(id) {
    return this._http.get<any>(this.url + '/chatWindowData/' + id);
  }
}
