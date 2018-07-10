import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class ChatListService {
  url = 'http://localhost:3000';
  prodUrl = 'https://whatsapp-web-77307.firebaseio.com';
  constructor(private _http: HttpClient) { }

  getAllChatListData() {
    // return this._http.get<any>(this.url + '/chatListData');
    return this._http.get<any>(this.prodUrl + '/chatListData.json');
  }
  getChatById(id) {
    // return this._http.get<any>(this.url + '/chatListData/' + id);
    return this._http.get<any>(this.prodUrl + `/chatListData.json?orderBy=%22id%22&startAt=${id}&limitToFirst=1`);
  }
}
