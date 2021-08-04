import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'twitter-clone';

  constructor(private afMessaging: AngularFireMessaging) {

  }
  ngOnInit() {
    this.requestPermission();
    this.listen();

  }


  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log("permission granted");
        console.log(token);
      },
      (error) => {
        console.log(error);

      }
    )
  }

  listen() {
    this.afMessaging.messages.subscribe(message => {
      var notif: any = message
      console.log(message);

          // var notification = new Notification("subscribed successfully", notif.notification)
          // var notification = new Notification("Hi there!");
    })
  }
}
