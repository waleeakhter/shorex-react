import globals from './globals';
import TheLayout from "./components/TheLayout";
import CustomLogin from "./components/CustomLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/Styles/Style.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
global.customLayout = TheLayout;
global.customLogin = CustomLogin
console.log(globals, "globals");
require(`@evenlogics/whf-reactadmin`);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}