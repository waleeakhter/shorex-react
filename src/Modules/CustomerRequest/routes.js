import React from "react";
const CustomerRequest = React.lazy(() => import("./Views/CustomerRequest"));

const CustomerRequestDetail = React.lazy(() => import("./Views/CustomerRequestDetail"));
const routes = {
  CustomerRequest: {
    path: "/customer-request",
    exact: true,
    component: CustomerRequest,
    roles: ['Admin'],
  },
  CustomerRequestDetail: {
    path: "/customer-request/:id/details",
    exact: true,
    component: CustomerRequestDetail,
    roles: ['Admin'],
  },
  
};

export default routes;
