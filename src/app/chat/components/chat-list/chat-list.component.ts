import { Component, Output, EventEmitter } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';
import { MSG_ARRAY } from '../../../../assets/chatMsgs';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  msgs: ChatMsg[] = MSG_ARRAY;
  @Output()
  showUserProfile: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactProfile: EventEmitter<any> = new EventEmitter<any>();

  showAvatarClicked() {
    this.showUserProfile.emit(true);
  }
  contactAvatarClicked() {
    this.showContactProfile.emit(true);
  }
}
