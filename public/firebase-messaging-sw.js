importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
const firebaseConfig = {

    apiKey: "AIzaSyA5dgWsG_UH2yanm_eaExt_pueL6ngyyeI",

    authDomain: "shorex-94468.firebaseapp.com",

    projectId: "shorex-94468",

    storageBucket: "shorex-94468.appspot.com",

    messagingSenderId: "65869447920",

    appId: "1:65869447920:web:c370a5ffa84d27ad2e3835",

    measurementId: "G-86YH5CCJJW"

};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    // self.registration.showNotification(notificationTitle,
    //     notificationOptions);
});



self.addEventListener("push", (event) => {
    console.log(event);
    let response = event.data && event.data.text();
    let title = JSON.parse(response).notification.title;
    let body = JSON.parse(response).notification.body;
    let icon = JSON.parse(response).notification.image;
    let image = JSON.parse(response).notification.image;
    console.log(title, { body, icon, image, data: { url: JSON.parse(response).data.url } })
    // event.waitUntil(
    //     self.registration.showNotification(title, { body, icon, image, data: { url: JSON.parse(response).data.url } })
    // )
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("/")

    );
    console.log("event.notification.data.url", event)
}); 