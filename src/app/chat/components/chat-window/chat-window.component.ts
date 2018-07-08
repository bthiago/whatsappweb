import {Component, Output, EventEmitter} from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  msg: ChatMsg = {
    'senderID': 1,
    'senderName': 'Ced MacCague',
    'lastMessage': 'brand bricks-and-clicks synergies',
    'timeStamp': '5:25 AM',
    'senderImage': 'https://robohash.org/quisetnam.jpg?size=50x50&set=set1'
  };
  @Output()
  showOptions: EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
}
