import React from "react";
const Rewards = React.lazy(() => import("./Views/Rewards"));

const routes = {
  Rewards: {
    path: "/rewards",
    exact: true,
    component: Rewards,
    roles: ['Admin'],
  },
};

export default routes;
