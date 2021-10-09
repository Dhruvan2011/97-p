// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyC1xWixcR7nmyKiqlMxMD28p2QklfNktXg",
    authDomain: "kwitter-a8bda.firebaseapp.com",
    databaseURL: "https://kwitter-a8bda-default-rtdb.firebaseio.com",
    projectId: "kwitter-a8bda",
    storageBucket: "kwitter-a8bda.appspot.com",
    messagingSenderId: "111023835871",
    appId: "1:111023835871:web:5b7972ba3cfbb9de99b76a"
  };
  
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



