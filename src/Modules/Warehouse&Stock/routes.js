import React from "react";
const Warehouse = React.lazy(() => import("./Views/Warehouse/Lists"));
const AddWarehouse = React.lazy(() => import("./Views/Warehouse/AddWarehouse"));
const AddStorekeeper = React.lazy(() => import("./Views/StoreKeepers/AddStorekeeper"));
const StorekeeperDetails = React.lazy(() => import("./Views/StoreKeepers/StorekeeperDetail"));
const Stocks = React.lazy(() => import("./Views/Stock/Stocks"));
const ItemTypeList = React.lazy(() => import("./Views/ItemType/ItemTypeList"));
const ItemTypeAdd = React.lazy(() => import("./Views/ItemType/ItemTypeAdd"));

const routes = {
  warehouse: {
    path: "/warehouses-list",
    exact: true,
    component: Warehouse,
    roles: ['Admin','Sub Admin'],
  },
  AddWarehouse: {
    path: "/warehouses-list/add",
    exact: true,
    component: AddWarehouse,
    roles: ['Admin','Sub Admin'],
  },
  EditWarehouse: {
    path: "/warehouses/:id/edit",
    exact: true,
    component: AddWarehouse,
    roles: ['Admin','Sub Admin'],
  },
  AddStorekeeper: {
    path: "/warehouses-list/storekeeper/add",
    exact: true,
    component: AddStorekeeper,
    roles: ['Admin','Sub Admin'],
  },
  EditStorekeeper: {
    path: "/warehouses-list/storekeepers/:id/edit",
    exact: true,
    component: AddStorekeeper,
    roles: ['Admin','Sub Admin'],
  },
  StorekeeperDetails: {
    path: "/warehouses-list/storekeepers/:id/details",
    exact: true,
    component: StorekeeperDetails,
    roles: ['Admin','Sub Admin'],
  },
  Stocks: {
    path: "/warehouses/stock",
    exact: true,
    component: Stocks,
    roles: ['Admin','Sub Admin'],
  },

  item_type_list: {
    path: "/warehouses/item-type",
    exact: true,
    component: ItemTypeList,
    roles: ['Admin','Sub Admin'],
  },
  item_type_add: {
    path: "/warehouses/item-type/add",
    exact: true,
    component: ItemTypeAdd,
    roles: ['Admin','Sub Admin'],
  },
};

export default routes;
