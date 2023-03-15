import React from "react";
const Lists = React.lazy(() => import("./Views/Lists"));
const AddDriver = React.lazy(() => import("./Views/Drivers/AddDriver"));
const AddVehicle = React.lazy(() => import("./Views/Vehicles/AddVehicle"));
const Assign = React.lazy(() => import("./Views/Drivers/Assign"));
const Profile = React.lazy(() => import("./Views/Drivers/Profile"));

const routes = {
  Lists: {
    path: "/lists",
    exact: true,
    component: Lists,
   roles: ['Admin','Sub Admin'],
  },
  AddDriver: {
    path: "/lists/drivers/add",
    exact: true,
    component: AddDriver,
   roles: ['Admin','Sub Admin'],
  },
  EditDriver: {
    path: "/lists/drivers/:id/edit",
    exact: true,
    component: AddDriver,
   roles: ['Admin','Sub Admin'],
  },
  AddVehicles: {
    path: "/lists/vehicles/add",
    exact: true,
    component: AddVehicle,
   roles: ['Admin','Sub Admin'],
  },
  EditVehicles: {
    path: "/vehicles/:id/edit",
    exact: true,
    component: AddVehicle,
   roles: ['Admin','Sub Admin'],
  },

  Assign: {
    path: "/lists/driver/:id/assign-driver",
    exact: true,
    component: Assign,
   roles: ['Admin','Sub Admin'],
  },
  Profile: {
    path: "/lists/drivers/:id/profile",
    exact: true,
    component: Profile,
   roles: ['Admin','Sub Admin'],
  },

  
};



export default routes;
