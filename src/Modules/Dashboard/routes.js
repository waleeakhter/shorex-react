import React from "react";
const Dashboard = React.lazy(() => import("./Views/Dashboard"));

const routes = {
  Dashboard: {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
   roles: ['Admin','Sub Admin'],
    isPublic : false,
  },
};

export default routes;
