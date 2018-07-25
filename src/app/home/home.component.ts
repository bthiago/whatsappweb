import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { ChatListService } from '../services/chat-list.service';
import { ChatWindowMsgsService } from '../services/chat-window-msgs.service';
import { ChatWindowDataInterface, ChatListDataInterface } from '../../assets/chatInterfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserProfileActive;
  topics;
  isContactProfileActive;
  msgs: ChatListDataInterface[];
  allWindowChatHistory: ChatWindowDataInterface[];
  windowHeaderData;
  windowChatHistory;
  constructor(private _chatListService: ChatListService,
    private elem: ElementRef,
    private _chatWindowMsgsService: ChatWindowMsgsService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    public db: AngularFireDatabase) {
  }
  @ViewChild('appChatList') appChatList;

  ngOnInit(): void {
    this.setDataSource();
    firebase.database().ref('chatWindowData').on('value', snapshot => {
      this.ngZone.run(() => {
        this.allWindowChatHistory = snapshot.val();
      });
      // this.cdr.detectChanges();
    });
    firebase.database().ref('chatListData').on('value', snapshot => {
      this.msgs = snapshot.val();
      // this.cdr.detectChanges();
    });
  }
  setDataSource(): any {
    if (!localStorage.getItem('chatListData')) {
      this._chatListService.getAllChatListData()
        .subscribe(
          res => {
            this.msgs = res;
            this.windowHeaderData = res[0];
            localStorage.setItem('chatListData', JSON.stringify(res));
          },
          err => {
            console.log('service failed');
            // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
          }
        );
    } else {
      this.msgs = JSON.parse(localStorage.getItem('chatListData'));
      this.windowHeaderData = this.msgs[0];
    }

    if (!localStorage.getItem('chatWindowData')) {
      this._chatWindowMsgsService.getChatWindowData()
        .subscribe(
          res => {
            this.allWindowChatHistory = res;
            this.windowChatHistory = res[0];
            localStorage.setItem('chatWindowData', JSON.stringify(res));
          },
          err => {
            console.log('service failed');
            // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
          }
        );
    } else {
      this.allWindowChatHistory = JSON.parse(localStorage.getItem('chatWindowData'));
      this.windowChatHistory =  this.allWindowChatHistory[0];
    }
  }
  showChatList() {
    this.elem.nativeElement.querySelectorAll('.chat-list-container')[0].style['min-width'] = '100%';
  }
  hideChatList() {
    this.elem.nativeElement.querySelectorAll('.chat-list-container')[0].style['min-width'] = '0';
  }

  changeChatWindow(seletedChatMsg) {
    this.windowHeaderData = seletedChatMsg;
    this.windowChatHistory = this.allWindowChatHistory[seletedChatMsg.id - 1];
    this.hideChatList();
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
