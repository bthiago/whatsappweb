import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Socket } from '../../../websocket/echoSocket';

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
  viewPlaceholder(event) {
    if (this.newMsgText === '') {
      this.newMsgText = 'Type a message';
      this.showPlaceholder = true;
    } else {
      if (event.keyCode === 13) {
        this.sendMessage(this.newMessageInput.nativeElement);
      }
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

      const connection = new Socket(messageText.value, this.chatHistoryData.chatHistory);
      // Reset input field
      this.newMsgText = 'Type a message';
      this.showPlaceholder = true;
    }


  }
}
