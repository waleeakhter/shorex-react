import React from "react";
const CustomerRequest = React.lazy(() => import("./Views/CustomerRequest"));

const CustomerRequestDetail = React.lazy(() => import("./Views/CustomerRequestDetail"));
const routes = {
  CustomerRequest: {
    path: "/customer-request",
    exact: true,
    component: CustomerRequest,
   roles: ['Admin','Sub Admin'],
  },
  CustomerRequestDetail: {
    path: "/customer-request/:id/details",
    exact: true,
    component: CustomerRequestDetail,
   roles: ['Admin','Sub Admin'],
  },
  
};

export default routes;
