import { Component, OnInit } from '@angular/core';
import { ChatListService } from '../services/chat-list.service';
import { ChatWindowMsgsService } from '../services/chat-window-msgs.service';
import { ChatWindowDataInterface, ChatListDataInterface } from '../../assets/chatInterfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserProfileActive;
  isContactProfileActive;
  msgs: ChatListDataInterface[];
  allWindowChatHistory: ChatWindowDataInterface[];
  windowHeaderData;
  windowChatHistory;
  constructor(private _chatListService: ChatListService,
    private _chatWindowMsgsService: ChatWindowMsgsService) {
  }

  ngOnInit() {
    this.setDataSource();
    // Setting the first msg on list and chat window
    this.windowHeaderData = this.msgs[0];
    this.windowChatHistory = this.allWindowChatHistory[0];
  }
  setDataSource(): any {
    if (!localStorage.getItem('chatListData')) {
      this._chatListService.getAllChatListData()
        .subscribe(
          res => {
            this.msgs = res;
            localStorage.setItem('chatListData', JSON.stringify(res));
          },
          err => {
            console.log('service failed');
            // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
          }
        );
    } else {
      this.msgs = JSON.parse(localStorage.getItem('chatListData'));
    }

    if (!localStorage.getItem('chatWindowData')) {
      this._chatWindowMsgsService.getChatWindowData()
        .subscribe(
          res => {
            this.allWindowChatHistory = res;
            localStorage.setItem('chatWindowData', JSON.stringify(res));
          },
          err => {
            console.log('service failed');
            // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
          }
        );
    } else {
      this.allWindowChatHistory = JSON.parse(localStorage.getItem('chatWindowData'));
    }
  }

  changeChatWindow(seletedChatMsg) {
    this.windowHeaderData = seletedChatMsg;
    this.windowChatHistory = this.allWindowChatHistory[seletedChatMsg.id - 1];
    // this._chatWindowMsgsService.getChatWindowDataById(seletedChatMsg.id)
    //   .subscribe(
    //     res => {
    //       this.windowChatHistory = res;
    //     },
    //     err => {
    //       console.log('service failed');
    //       // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
    //     }
    //   );
  }
}
