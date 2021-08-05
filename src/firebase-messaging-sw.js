
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBjmWxF6hmESqdsEsiMCIfZvvgmewz2iAU",
  authDomain: "notifications-8afba.firebaseapp.com",
  projectId: "notifications-8afba",
  storageBucket: "notifications-8afba.appspot.com",
  messagingSenderId: "512624927384",
  appId: "1:512624927384:web:78795a8dfd3706f226a6ed",
  measurementId: "G-7XMKQ4Z134",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);
  // here you can override some options describing what's in the message;
  // however, the actual content will come from the Webtask
  const notificationOptions = {
    icon: '../src/assets/images/twitter-logo.png',
    image: './assets/images/portrait.jpg',
    vibrate: [200, 100, 200]
  };
  // window.navigator.vibrate([200, 100, 200]);
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
