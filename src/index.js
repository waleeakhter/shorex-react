import globals from './globals';
import TheLayout from "./components/TheLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/Styles/Style.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
global.customLayout = TheLayout;
console.log(globals, "globals");
require(`@evenlogics/whf-reactadmin`);