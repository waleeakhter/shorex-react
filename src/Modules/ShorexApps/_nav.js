
export default {
  apps: {
    _tag: 'CSidebarNavItem',
    name: 'ShorexApps',
    phrase: 'Shorex Apps',
    to: '/apps',
    icon: ' shorexapps-icon',
    roles: ['Admin'],
    order:6,
    children: {
      notifications: {
        _tag: 'CSidebarNavItem',
        name: 'notifications',
        phrase: 'Notifications',
        to: '/apps/notifications',
        order: 10,
        icon: 'fa-solid fa-bell',
        roles: ['Admin'],
      },
      products: {
        _tag: 'CSidebarNavItem',
        name: 'products',
        phrase: 'Products',
        to: '/apps/products',
        order: 10,
        icon: ' products-icons',
        roles: ['Admin'],
      },
      promotions: {
        _tag: 'CSidebarNavItem',
        name: 'promotions',
        phrase: 'Promotions',
        to: '/apps/promotions',
        order: 10,
        icon: ' promotions-icon',
        roles: ['Admin'],
      },
      managepolicy: {
        _tag: 'CSidebarNavItem',
        name: 'managepolicy',
        phrase: 'Privacy Policy',
        to: '/apps/privacy-policy',
        order: 10,
        icon: ' managepolicy-icon',
        roles: ['Admin'],
      },
      terms: {
        _tag: 'CSidebarNavItem',
        name: 'terms',
        phrase: 'Terms & Conditions',
        to: '/apps/terms-conditions',
        order: 10,
        icon: 'fa-regular fa-clipboard-list',
        roles: ['Admin'],
      },
      managebusiness: {
        _tag: 'CSidebarNavItem',
        name: 'managebusiness',
        phrase: 'Business Categories',
        to: '/apps/business-categories',
        order: 10,
        icon: 'fa-regular fa-briefcase',
        roles: ['Admin'],
      },
      managerewards: {
        _tag: 'CSidebarNavItem',
        name: 'managerewards',
        phrase: 'Reward Points',
        to: '/apps/manage-rewards',
        order: 10,
        icon: 'fa-light fa-award fs-4',
        roles: ['Admin'],
      },
      holidays: {
        _tag: 'CSidebarNavItem',
        name: 'holidays',
        phrase: 'Official Holidays',
        to: '/apps/manage-official-holidays',
        order: 10,
        icon: ' holidays-icon',
        roles: ['Admin'],
      },
    },
  },
}
