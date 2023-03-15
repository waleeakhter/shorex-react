import customNav from "./config/nav";
global.customNavGlobal = customNav;
global.customRoutes = require("./config/routes");
global.customModules = require("./config/modules");
global.customLogin = false;
global.customNavElements = false;

export default global;
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}