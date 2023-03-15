
export default {
  warehouse: {
    _tag: 'CSidebarNavItem',
    name: 'warehouse',
    phrase: 'nav-warehouse-stock',
    to: '/warehouses',
    icon: 'fa-solid fa-warehouse-full',
    roles: ['Admin','Sub Admin'],
    order:8,
    children: {
      Warehouse:{
        _tag: 'CSidebarNavItem',
        name: 'stock',
        phrase: 'nav-warehouses',
        to: '/warehouses-list',
        icon: 'fa-regular fa-warehouse',
        roles: ['Admin','Sub Admin'],
        order:1,
      },
      stock:{
        _tag: 'CSidebarNavItem',
        name: 'stock',
        phrase: 'nav-stock',
        to: '/warehouses/stock',
        icon: 'fa-regular fa-boxes-stacked',
        roles: ['Admin','Sub Admin'],
        order:2,
      },
      item_type:{
        _tag: 'CSidebarNavItem',
        name: 'stock',
        phrase: 'item-type',
        to: '/warehouses/item-type',
        icon: 'fa-regular fa-boxes-stacked',
        roles: ['Admin','Sub Admin'],
        order:2,
      }
    },
  },
}
