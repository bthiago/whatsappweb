import { Component, OnInit } from '@angular/core';
import { chatWindowData } from 'src/assets/chatWindowData';
import { chatListData } from '../../assets/chatListData';
import { ChatListService } from '../services/chat-list.service';
import { ChatWindowMsgsService } from '../services/chat-window-msgs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  windowHeaderData = chatListData[0];
  windowChatHistory = chatWindowData[0];
  constructor(private _chatListService: ChatListService,
    private _chatWindowMsgsService: ChatWindowMsgsService) {
  }

  ngOnInit() {
  }

  changeChatWindow(seletedChatMsg) {
    this.windowHeaderData = seletedChatMsg;
    this._chatWindowMsgsService.getChatWindowDataById(seletedChatMsg.id)
      .subscribe(
        res => {
          this.windowChatHistory = res;
        },
        err => {
          console.log('service failed');
          // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
        }
      );
  }
}
