import React from "react";
const CustomersList = React.lazy(() => import("./Views/CustomersList"));
const AddCustomer = React.lazy(() => import("./Views/AddCustomer"));
const CustomerProfile = React.lazy(() => import("./Views/CustomerProfile"));
const routes = {
  CustomersList: {
    path: "/customers",
    exact: true,
    component: CustomersList,
    roles: ['Admin'],
  },
  AddCustomer: {
    path: "/customers/add",
    exact: true,
    component: AddCustomer,
    roles: ['Admin'],
  },
  EditCustomer: {
    path: "/customers/:id/edit",
    exact: true,
    component: AddCustomer,
    roles: ['Admin'],
  },
  CustomerProfile: {
    path: "/customers/:id/profile",
    exact: true,
    component: CustomerProfile,
    roles: ['Admin'],
  },
 
};

export default routes;
