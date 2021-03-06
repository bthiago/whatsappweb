import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatListComponent } from './chat/components/chat-list/chat-list.component';
import { ChatWindowComponent } from './chat/components/chat-window/chat-window.component';
import { SingleChatComponent } from './chat/components/single-chat/single-chat.component';
import { UserProfileComponent } from './chat/components/user-profile/user-profile.component';
import { ContactProfileComponent } from './chat/components/contact-profile/contact-profile.component';
import { SimpleMsgComponent } from './messages/components/simple-msg/simple-msg.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatListComponent,
    ChatWindowComponent,
    SingleChatComponent,
    UserProfileComponent,
    ContactProfileComponent,
    SimpleMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
