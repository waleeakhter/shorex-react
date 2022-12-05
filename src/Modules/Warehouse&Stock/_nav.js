
export default {
  warehouse: {
    _tag: 'CSidebarNavItem',
    name: 'warehouse',
    phrase: 'Warehouse & Stock',
    to: '/warehouses',
    icon: 'fa-solid fa-warehouse-full',
    roles: ['Admin'],
    order:8,
    children: {
      Warehouse:{
        _tag: 'CSidebarNavItem',
        name: 'stock',
        phrase: 'Warehouses',
        to: '/warehouses-list',
        icon: 'fa-regular fa-warehouse',
        roles: ['Admin'],
        order:1,
      },
      stock:{
        _tag: 'CSidebarNavItem',
        name: 'stock',
        phrase: 'Stock',
        to: '/warehouses/stock',
        icon: 'fa-regular fa-boxes-stacked',
        roles: ['Admin'],
        order:2,
      }
    },
  },
}
