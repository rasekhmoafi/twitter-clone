import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FirstColComponent } from './main/first-col/first-col.component';
import { SecondColComponent } from './main/second-col/second-col.component';
import { ThirdColComponent } from './main/third-col/third-col.component';
import { RetweetComponent } from './main/second-col/retweet/retweet.component';
import { TrendsComponent } from './main/third-col/trends/trends.component';
import { ShouldFollowComponent } from './main/third-col/should-follow/should-follow.component';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    MainComponent,
    FirstColComponent,
    SecondColComponent,
    ThirdColComponent,
    RetweetComponent,
    TrendsComponent,
    ShouldFollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
