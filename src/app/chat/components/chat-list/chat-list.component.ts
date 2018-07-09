import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';
import { MSG_ARRAY } from '../../../../assets/chatMsgs';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  searchText = 'Search or start a new chat';
  showPlaceholder = true;

  msgs: ChatMsg[] = MSG_ARRAY;
  @ViewChild('chatList') chatList: ElementRef;
  @Output()
  showUserProfile: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactProfile: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showChatWindow: EventEmitter<any> = new EventEmitter<any>();

  showAvatarClicked() {
    this.showUserProfile.emit(true);
  }
  contactAvatarClicked() {
    this.showContactProfile.emit(true);
  }
  onChangeChatWindow(msg) {
    this.showChatWindow.emit(msg);
  }

  removePlaceholder() {
    if (this.searchText === 'Search or start a new chat') {
      this.searchText = '';
      this.showPlaceholder = false;
    }
  }
  searchKeyUp(searchString: string) {
    this.viewPlaceholder();

    const filter = searchString.toUpperCase();
    const list = this.chatList.nativeElement;
    // const list = document.getElementById("myUL");
    const chatBoxes = list.children;
    for (let i = 0; i < chatBoxes.length; i++) {
      const chatBoxText = list.children[i].innerText; // searches both: title and last message
      // just for title
      // const title = list.children[i].getElementsByClassName('chat-title')[0].innerText;
        if (chatBoxText.toUpperCase().indexOf(filter) > -1) {
          chatBoxes[i].style.display = '';
        } else {
          chatBoxes[i].style.display = 'none';
        }
    }
    // this.msgs = this.msgs.filter((item) => item.senderName === 'Dunn Blindt');
  }
  viewPlaceholder() {
    if (this.searchText === '') {
      this.searchText = 'Search or start a new chat';
      this.showPlaceholder = true;
    }
  }

}
