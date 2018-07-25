import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatWindowMsgsService {

  url = 'http://localhost:3000';
  prodUrl = 'https://whatsapp-web-77307.firebaseio.com';

  constructor(private _http: HttpClient) { }

  getChatWindowData() {
    // return this._http.get<any>(this.url + '/chatWindowData');
    return this._http.get<any>(this.prodUrl + '/chatWindowData.json');
  }
  getChatWindowDataById(id) {
    // return this._http.get<any>(this.url + '/chatWindowData/' + id);
    return this._http.get<any>(this.prodUrl + `/chatWindowData/${id - 1}.json`);
  }
  updateChatWindowData(id, chatMsgs) {
    return this._http.put(this.prodUrl + `/chatWindowData/${id}/chatHistory.json`,  JSON.stringify(chatMsgs));
  }
}
