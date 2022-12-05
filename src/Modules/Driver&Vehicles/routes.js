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
    roles: ['Admin'],
  },
  AddDriver: {
    path: "/lists/drivers/add",
    exact: true,
    component: AddDriver,
    roles: ['Admin'],
  },
  EditDriver: {
    path: "/lists/drivers/:id/edit",
    exact: true,
    component: AddDriver,
    roles: ['Admin'],
  },
  AddVehicles: {
    path: "/lists/vehicles/add",
    exact: true,
    component: AddVehicle,
    roles: ['Admin'],
  },
  EditVehicles: {
    path: "/vehicles/:id/edit",
    exact: true,
    component: AddVehicle,
    roles: ['Admin'],
  },

  Assign: {
    path: "/lists/driver/:id/assign-driver",
    exact: true,
    component: Assign,
    roles: ['Admin'],
  },
  Profile: {
    path: "/lists/drivers/:id/profile",
    exact: true,
    component: Profile,
    roles: ['Admin'],
  },

  
};



export default routes;
