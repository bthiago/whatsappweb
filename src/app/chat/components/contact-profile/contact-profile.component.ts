import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent {
  @Output()
  closeContactProfile: EventEmitter<any> = new EventEmitter<any>();

  btnBackClicked() {
    this.closeContactProfile.emit(true);
  }
}
