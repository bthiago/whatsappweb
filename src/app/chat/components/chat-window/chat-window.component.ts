import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';
import { MSG_ARRAY } from 'src/assets/chatMsgs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  @Input() msg: ChatMsg;
  // msg = MSG_ARRAY[2];
  @Output()
  showOptions: EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
}
