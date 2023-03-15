import React from "react";
const Admin = React.lazy(() => import("./Views/Admin"));
const AddAdmin = React.lazy(() => import("./Views/AddAdmin"));
const routes = {
  Admin: {
    path: "/admin-profile",
    exact: true,
    component: Admin,
   roles: ['Admin','Sub Admin'],
  },
  AddAdmin: {
    path: "/admin-profile/add",
    exact: true,
    component: AddAdmin,
   roles: ['Admin','Sub Admin'],
  },
  EditAdmin: {
    path: "/admin-profile/:id/edit",
    exact: true,
    component: AddAdmin,
   roles: ['Admin','Sub Admin'],
  },
  
};

export default routes;
