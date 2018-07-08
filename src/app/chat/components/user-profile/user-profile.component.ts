import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Output()
  closeUserProfile: EventEmitter<any> = new EventEmitter<any>();

  btnBackClicked() {
    this.closeUserProfile.emit(true);
  }
}
