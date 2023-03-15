import React from "react";
const SubAdmins = React.lazy(() => import("./Views/SubAdmins"));

const routes = {
  settings: {
    path: "/settings",
    exact: true,
    component: SubAdmins,
    roles: ['Admin'],
  },
};

export default routes;
