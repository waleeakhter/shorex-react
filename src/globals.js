import customNav from "./config/nav";
global.customNavGlobal = customNav;
global.customRoutes = require("./config/routes");
global.customModules = require("./config/modules");
global.customLogin = false;
global.customNavElements = false;

export default global;