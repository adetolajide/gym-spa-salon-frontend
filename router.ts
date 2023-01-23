export const customRouter = {
  auth: {
    login: "/login",
    register: "/register",
  },
  home: "/",
  dashboard: [
    {
      link: "dashboard",
      icon: "bi bi-grid text-xl font-bold",
      label: "Dashboard",
      active: true,
    },
    {
      link: "dashboard/product-sales",
      icon: "bi bi-wallet2",
      label: "Product Sales",
    },
    {
      link: "dashboard/services",
      icon: "bi bi-grid-1x2",
      label: "Services",
    },
    {
      link: "dashboard/appointments",
      icon: "bi bi-calendar2-event",
      label: "Appointments",
    },
    {
      link: "dashboard/inventory",
      icon: "bi bi-box",
      label: "Inventory",
    },
    {
      link: "dashboard/expenses",
      icon: "bi bi-card-text",
      label: "Expenses",
    },
    {
      link: "dashboard/clients",
      icon: "bi bi-person-circle",
      label: "Clients",
    },
    {
      link: "dashboard/staff",
      icon: "bi bi-people",
      label: "Staff",
    },
    {
      link: "dashboard/reports",
      icon: "bi bi-file-text",
      label: "Reports",
    },
    {
      link: "dashboard/accounts",
      icon: "bi bi-clipboard-data",
      label: "Accounts",
    },
    // {
    //   link: "dashboard/settings",
    //   icon: "bi bi-gear",
    //   label: "Settings",
    // },
  ],
  // dashboard: {
  //     home: {
  //         link: 'dashboard/home',
  //         icon: 'bi bi-grid text-xl font-bold',
  //         label: 'Dashboard'
  //     },
  //     pointOfSales: {
  //         link: 'dashboard/point-of-sales',
  //         icon: 'bi bi-wallet2',
  //         label: 'Point Of Sales'
  //     },
  //     services: {
  //         link: 'dashboard/services',
  //         icon: 'bi bi-grid-1x2',
  //         label: 'Services'
  //     },
  //     appointments: {
  //         link: 'dashboard/appointments',
  //         icon: 'bi bi-calendar2-event',
  //         label: 'Appointments'
  //     },
  //     inventory: {
  //         link: 'dashboard/inventory',
  //         icon: 'bi bi-box',
  //         label: 'Inventory'
  //     },
  //     clients: {
  //         link: 'dashboard/clients',
  //         icon: 'bi bi-person-circle',
  //         label: 'Clients'
  //     },
  //     staff: {
  //         link: 'dashboard/staff',
  //         icon: 'bi bi-people',
  //         label: 'Staff'
  //     },
  //     reports: {
  //         link: 'dashboard/reports',
  //         icon: 'bi bi-file-text',
  //         label: 'Reports'
  //     },
  //     accounts: {
  //         link: 'dashboard/accounts',
  //         icon: 'bi bi-clipboard-data"></i',
  //         label: 'Accounts'
  //     },
  //     settings: {
  //         link: 'dashboard/settings',
  //         icon: 'bi bi-gear',
  //         label: 'Settings'
  //     }
  // }
};
