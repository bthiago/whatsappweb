import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';
import { MSG_ARRAY } from 'src/assets/chatMsgs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements AfterViewChecked {
  @ViewChild('newMessageInput') newMessageInput: ElementRef;
  @ViewChild('chatContainer') chatContainer: ElementRef;
  newMsgText = 'Type a message';
  showPlaceholder = true;

  @Input() msg: ChatMsg;
  // msg = MSG_ARRAY[2];
  @Output()
  showOptions: EventEmitter<any> = new EventEmitter<any>();
  ngAfterViewChecked(): void {
      // scroll chat container to bottom
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

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
    // Only send if placholder not active
    if (!this.showPlaceholder) {
      // add value to the chat history
      this.msg.chatHistory.push({
        sent: true,
        msgText: messageText.value
      });

      // Reset input field
      this.newMsgText = 'Type a message';
      this.showPlaceholder = true;
    }
  }
}
