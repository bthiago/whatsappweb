import { Component, OnInit } from '@angular/core';
import { MSG_ARRAY } from 'src/assets/chatMsgs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = MSG_ARRAY[2];

  constructor() { }

  ngOnInit() {
  }

  changeChatWindow(seletedChatMsg) {
    this.message = seletedChatMsg;
  }
}
