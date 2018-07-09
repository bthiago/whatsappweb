import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';
import { MSG_ARRAY } from 'src/assets/chatMsgs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  @ViewChild('newMessageInput') newMessageInput: ElementRef;
  newMsgText = 'Type a message';
  showPlaceholder = true;

  @Input() msg: ChatMsg;
  // msg = MSG_ARRAY[2];
  @Output()
  showOptions: EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
  removePlaceholder() {
    if (this.newMsgText === 'Type a message') {
      this.newMsgText = '';
      this.showPlaceholder = false;
    }
  }
  viewPlaceholder() {
    if (this.newMsgText === '') {
      this.newMsgText = 'Type a message';
      this.showPlaceholder = true;
    }
  }

  sendMessage(messageText) {
    if (!this.showPlaceholder) {
      // console.log(messageText.value);
      this.msg.chatHistory.push({
        sent: true,
        msgText: messageText.value
      });

      this.newMsgText = 'Type a message';
      this.showPlaceholder = true;
    }
  }
}
