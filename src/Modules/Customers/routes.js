import React from "react";
const CustomersList = React.lazy(() => import("./Views/CustomersList"));
const AddCustomer = React.lazy(() => import("./Views/AddCustomer"));
const CustomerProfile = React.lazy(() => import("./Views/CustomerProfile"));
const  DeletedCustomers=React.lazy(() => import("./Views/DeletedCustomers"));
const routes = {
  CustomersList: {
    path: "/customers",
    exact: true,
    component: CustomersList,
   roles: ['Admin','Sub Admin'],
  },
  AddCustomer: {
    path: "/customers/add",
    exact: true,
    component: AddCustomer,
   roles: ['Admin','Sub Admin'],
  },
  EditCustomer: {
    path: "/customers/:id/edit",
    exact: true,
    component: AddCustomer,
   roles: ['Admin','Sub Admin'],
  },
  CustomerProfile: {
    path: "/customers/:id/profile",
    exact: true,
    component: CustomerProfile,
   roles: ['Admin','Sub Admin'],
  },
  deletedCustomers: {
    path: "/customers/deleted",
    exact: true,
    component: DeletedCustomers,
   roles: ['Admin','Sub Admin'],
  },
 
};

export default routes;
