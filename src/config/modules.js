export default [
    {
        name: 'dashboard',
        component: require('./../Modules/Dashboard'),
        status: true,
        order: 1,
      },
      {
        name: 'CustomerRequest',
        component: require('./../Modules/CustomerRequest'),
        status: true,
        order: 1,
      },
      {
        name: 'rewards',
        component: require('./../Modules/Rewards'),
        status: true,
        order: 1,
      },
      {
        name: 'unsuccessfull',
        component: require('./../Modules/UnsuccessfullRequests'),
        status: true,
        order: 1,
      },
      {
        name: 'reports',
        component: require('./../Modules/Reports'),
        status: true,
        order: 1,
      },
      {
        name: 'shorexapps',
        component: require('./../Modules/ShorexApps'),
        status: true,
        order: 1,
      },
      {
        name: 'Customers',
        component: require('./../Modules/Customers'),
        status: true,
        order: 1,
      },
      {
        name: 'Customers',
        component: require('./../Modules/Warehouse&Stock'),
        status: true,
        order: 1,
      },
      {
        name: 'drivers',
        component: require('./../Modules/Driver&Vehicles'),
        status: true,
        order: 1,
      },
      {
        name: 'Admin',
        component: require('./../Modules/Admin'),
        status: true,
        order: 1,
      },
      {
        name: 'Settings',
        component: require('./../Modules/Settings'),
        status: true,
        order: 1,
      },
];