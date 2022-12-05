import React from "react";
const Dashboard =  React.lazy(() => import('./../Modules/Dashboard/Views/Dashboard'))
const Logout =  React.lazy(() => import('./../components/Logout'))
const routes = [
	{ path: '/', name: 'Dashboard', component: Dashboard, isPublic: false ,  exact: true, roles: [ 'Admin']},
	{ path: '/logout', name: 'Logout', component: Logout, isPublic: false ,  exact: true, roles: [ 'Admin']},
];


export default routes;
