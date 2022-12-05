import React from "react";
const UnsuccessfullRequest = React.lazy(() => import("./Views/UnsuccessfullRequest"));
const UnsuccessfullRequestDetail = React.lazy(() => import("./Views/Detail"));

const routes = {
  UnsuccessfullRequest: {
    path: "/unsuccessfull-requests",
    exact: true,
    component: UnsuccessfullRequest,
    roles: ['Admin'],
  },
  UnsuccessfullRequestDetail: {
    path: "/unsuccessfull-requests/detail",
    exact: true,
    component: UnsuccessfullRequestDetail,
    roles: ['Admin'],
  },
};

export default routes;
