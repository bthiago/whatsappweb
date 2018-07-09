import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';
import { chatWindowData } from 'src/assets/chatWindowData';
import { chatListData } from '../../../../assets/chatListData';

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
  @Input() chatWindowHeaderData;
  @Input() chatHistoryData;
  @Output() showOptions: EventEmitter<any> = new EventEmitter<any>();
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
      this.chatHistoryData.chatHistory.push({
        sent: true,
        msgText: messageText.value
      });

      // Reset input field
      this.newMsgText = 'Type a message';
      this.showPlaceholder = true;
    }
  }
}
