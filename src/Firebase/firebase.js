import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import Api from "@evenlogics/whf-api"
const firebaseConfig = {

    apiKey: "AIzaSyA5dgWsG_UH2yanm_eaExt_pueL6ngyyeI",

    authDomain: "shorex-94468.firebaseapp.com",

    projectId: "shorex-94468",

    storageBucket: "shorex-94468.appspot.com",

    messagingSenderId: "65869447920",

    appId: "1:65869447920:web:c370a5ffa84d27ad2e3835",

    measurementId: "G-86YH5CCJJW"

};


initializeApp(firebaseConfig);
const messaging = getMessaging();



export const requestForToken = () => {
    return getToken(messaging, { vapidKey: 'BO-FW6XQOP-c_jxO-udXxU0DSuvRJ1Mr9Y-08X8qGRrXIwlyliSoYrG8lOeQqkEERVzoXIN0UcdU1hmrgAZqCcA' })
        .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);
                // Perform any other neccessary action with the token
                const formData = new FormData();
                formData.append("platform", "web")
                formData.append("key", "playerid")
                formData.append("value", currentToken)
                Api.request("post", "/notification-device", formData).then(res => {
                    console.log(res);
                    window.location.reload();
                }
                ).catch((err) => { console.log(err); window.location.reload(); });

            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = (getNotifications) =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);

        });
    });
