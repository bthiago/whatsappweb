import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class ChatListService {
  url = 'http://localhost:3000';
  constructor(private _http: HttpClient) { }

  getAllChatListData() {
    return this._http.get<any>(this.url + '/chatListData');
  }
  getChatById(id) {
    return this._http.get<any>(this.url + '/chatListData/' + id);
  }
}
