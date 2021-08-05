import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'twitter-clone';

  constructor
  (
    private afMessaging: AngularFireMessaging,

    ) {
    // self.addEventListener('push', function (event) {
    //   if (!(self.Notification && self.Notification.permission === 'granted')) {
    //     return;
    //   }

    //   var data = {};

    //   var title = 'Something Has Happened';
    //   var message = "Here's something you might want to check out.";
    //   var icon = 'images/new-notification.png';

    //   var notification = new self.Notification(title, {
    //     body: message,
    //     tag: 'simple-push-demo-notification',
    //     icon: icon,
    //   });

    //   notification.addEventListener('click', function () {});
    // });
  }
  ngOnInit() {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('permission granted');
        console.log(token);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listen() {
    this.afMessaging.messages.subscribe((message) => {
      var notif: any = message;
      console.log(message);
      // ServiceWorkerRegistration.showNotification("title", notif.notification);
      // var notification = new Notification(
      //   'subscribed successfully',
      //   notif.notification
      // );
      // var notification = new Notification("Hi there!");
    });
  }
}
