import { Component, OnInit } from '@angular/core';
import { chatWindowData } from 'src/assets/chatWindowData';
import { chatListData } from '../../assets/chatListData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  windowHeaderData = chatListData[0];
  windowChatHistory = chatWindowData[0];
  constructor() { }

  ngOnInit() {
  }

  changeChatWindow(seletedChatMsg) {
    this.windowHeaderData = chatListData[seletedChatMsg.senderID - 1];
    this.windowChatHistory = chatWindowData[seletedChatMsg.senderID - 1];
  }
}
