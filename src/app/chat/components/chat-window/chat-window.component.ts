import { Component, Output, EventEmitter } from '@angular/core';
import { ChatMsg } from '../single-chat/ChatMsg';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  msg = {
    'senderID': 1,
    'senderName': 'Ced MacCague',
    'lastMessage': 'brand bricks-and-clicks synergies',
    'timeStamp': '5:25 AM',
    'senderImage': 'https://robohash.org/quisetnam.jpg?size=50x50&set=set1',
    'chatHistory': [{
      'sent': false,
      'msgText': 'orchestrate granular partnerships'
    }, {
      'sent': true,
      'msgText': 'repurpose open-source bandwidth'
    }, {
      'sent': false,
      'msgText': 'harness impactful relationships'
    }, {
      'sent': true,
      'msgText': 'matrix enterprise models'
    }, {
      'sent': false,
      'msgText': 'enable value-added e-services'
    }, {
      'sent': true,
      'msgText': 'extend killer e-business'
    }, {
      'sent': true,
      'msgText': 'extend transparent infrastructures'
    }, {
      'sent': true,
      'msgText': 'evolve wireless convergence'
    }, {
      'sent': false,
      'msgText': 'optimize plug-and-play platforms'
    }, {
      'sent': false,
      'msgText': 'aggregate sexy portals'
    }, {
      'sent': false,
      'msgText': 'deliver compelling applications'
    }, {
      'sent': false,
      'msgText': 'optimize 24/7 eyeballs'
    }, {
      'sent': false,
      'msgText': 'extend interactive metrics'
    }, {
      'sent': true,
      'msgText': 'morph turn-key networks'
    }, {
      'sent': true,
      'msgText': 'evolve bleeding-edge e-tailers'
    }, {
      'sent': true,
      'msgText': 'iterate cross-platform platforms'
    }, {
      'sent': false,
      'msgText': 'generate 24/7 platforms'
    }, {
      'sent': true,
      'msgText': 'exploit 24/365 metrics'
    }, {
      'sent': true,
      'msgText': 'revolutionize frictionless web-readiness'
    }, {
      'sent': false,
      'msgText': 'engage e-business synergies'
    }]
  };
  @Output()
  showOptions: EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
}
