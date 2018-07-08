import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-msg',
  templateUrl: './simple-msg.component.html',
  styleUrls: ['./simple-msg.component.css']
})
export class SimpleMsgComponent {

  @Input()
  isSent: boolean;

  @Input()
  message: string;
}
