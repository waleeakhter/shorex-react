import React from "react";
const Warehouse = React.lazy(() => import("./Views/Warehouse/Lists"));
const AddWarehouse = React.lazy(() => import("./Views/Warehouse/AddWarehouse"));
const AddStorekeeper = React.lazy(() => import("./Views/StoreKeepers/AddStorekeeper"));
const StorekeeperDetails = React.lazy(() => import("./Views/StoreKeepers/StorekeeperDetail"));
const Stocks = React.lazy(() => import("./Views/Stock/Stocks"));

const routes = {
  warehouse: {
    path: "/warehouses-list",
    exact: true,
    component: Warehouse,
    roles: ['Admin'],
  },
  AddWarehouse: {
    path: "/warehouses-list/add",
    exact: true,
    component: AddWarehouse,
    roles: ['Admin'],
  },
  EditWarehouse: {
    path: "/warehouses/:id/edit",
    exact: true,
    component: AddWarehouse,
    roles: ['Admin'],
  },
  AddStorekeeper: {
    path: "/warehouses-list/storekeeper/add",
    exact: true,
    component: AddStorekeeper,
    roles: ['Admin'],
  },
  EditStorekeeper: {
    path: "/warehouses-list/storekeepers/:id/edit",
    exact: true,
    component: AddStorekeeper,
    roles: ['Admin'],
  },
  StorekeeperDetails: {
    path: "/warehouses-list/storekeepers/:id/details",
    exact: true,
    component: StorekeeperDetails,
    roles: ['Admin'],
  },
  Stocks: {
    path: "/warehouses/stock",
    exact: true,
    component: Stocks,
    roles: ['Admin'],
  },
};

export default routes;
