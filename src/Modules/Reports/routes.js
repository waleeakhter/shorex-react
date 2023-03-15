import React from "react";
const Reports = React.lazy(() => import("./Views/Reports"));

const routes = {
  Reports: {
    path: "/reports",
    exact: true,
    component: Reports,
   roles: ['Admin','Sub Admin'],
  },
};

export default routes;
