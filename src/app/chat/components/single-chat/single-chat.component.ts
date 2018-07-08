import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ChatMsg } from './ChatMsg';

@Component({
  selector: 'app-single-chat',
  templateUrl: './single-chat.component.html',
  styleUrls: ['./single-chat.component.css']
})
export class SingleChatComponent {
  @Input() chat: ChatMsg;
  @Output() showContactProfile: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeChatWindow: EventEmitter<any> = new EventEmitter<any>();

  contactAvatarClicked() {
    this.showContactProfile.emit(true);
  }
  chatItemOnListClicked(event) {
    this.changeChatWindow.emit(true);
  }
}
