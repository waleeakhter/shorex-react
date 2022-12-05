import React from "react";
const PrivacyPolicey = React.lazy(() => import("./Views/PrivacyPolicey/PrivacyPolicey"));
const AddPrivacy = React.lazy(() => import("./Views/PrivacyPolicey/AddPrivacy.jsx"));
const TermsConditions = React.lazy(() => import("./Views/Terms&Conditions/Terms"));
const AddTerms = React.lazy(() => import("./Views/Terms&Conditions/AddTerms"));
const Notifications = React.lazy(() => import("./Views/Notifications/Notifications"));
const AddNotification = React.lazy(() => import("./Views/Notifications/AddNotification"));
const AddProduct = React.lazy(() => import("./Views/Products/AddProduct"))
const ProductsList = React.lazy(() => import("./Views/Products/ProductsList"))
const BusinessCategories = React.lazy(() => import("./Views/BusinessCategories/BusinessCategories"))
const AddCategory = React.lazy(() => import("./Views/BusinessCategories/AddCategory"))
const AddRewards = React.lazy(() => import("./Views/Rewards/AddRewards"))
const Rewards = React.lazy(() => import("./Views/Rewards/Rewards"))
const AddHoliday = React.lazy(() => import("./Views/Holidays/AddHoliday"))
const Holidays = React.lazy(() => import("./Views/Holidays/Holidays"))
const AddPromotion = React.lazy(() => import("./Views/Promotions/AddPromotion"))
const Promotions = React.lazy(() => import("./Views/Promotions/Promotions"))

const routes = {
  PrivacyPolicey: {
    path: "/apps/privacy-policy",
    exact: true,
    component: PrivacyPolicey,
    roles: ['Admin'],
  },
  AddPrivacyPolicey: {
    path: "/apps/privacy-policy/add",
    exact: true,
    component: AddPrivacy,
    roles: ['Admin'],
  },

  EditPrivacyPolicey: {
    path: "/apps/privacy-policy/edit",
    exact: true,
    component: AddPrivacy,
    roles: ['Admin'],
  },

  terms: {
    path: "/apps/terms-conditions",
    exact: true,
    component: TermsConditions,
    roles: ['Admin'],
  },
  AddTerms: {
    path: "/apps/terms-conditions/add",
    exact: true,
    component: AddTerms,
    roles: ['Admin'],
  },
  EditTerms: {
    path: "/apps/terms-conditions/edit",
    exact: true,
    component: AddTerms,
    roles: ['Admin'],
  },
  Notifications: {
    path: "/apps/notifications",
    exact: true,
    component: Notifications,
    roles: ['Admin'],
  },
  AddNotification: {
    path: "/apps/notifications/add",
    exact: true,
    component: AddNotification,
    roles: ['Admin'],
  },
  EditNotification: {
    path: "/apps/notifications/:id/edit",
    exact: true,
    component: AddNotification,
    roles: ['Admin'],
  },

  AddProduct: {
    path: "/apps/products/add",
    exact: true,
    component: AddProduct,
    roles: ['Admin'],
  },
  EditProduct: {
    path: "/apps/products/:id/edit",
    exact: true,
    component: AddProduct,
    roles: ['Admin'],
  },
  ProductsList: {
    path: "/apps/products",
    exact: true,
    component: ProductsList,
    roles: ['Admin'],
  },
  BusinessCategories: {
    path: "/apps/business-categories",
    exact: true,
    component: BusinessCategories,
    roles: ['Admin'],
  },
  AddCategory: {
    path: "/apps/business-categories/add",
    exact: true,
    component: AddCategory,
    roles: ['Admin'],
  },
  EditCategory: {
    path: "/apps/business-categories/:id/edit",
    exact: true,
    component: AddCategory,
    roles: ['Admin'],
  },

  manageRewards: {
    path: "/apps/manage-rewards",
    exact: true,
    component: Rewards,
    roles: ['Admin'],
  },
  AddRewards: {
    path: "/apps/manage-rewards/add",
    exact: true,
    component: AddRewards,
    roles: ['Admin'],
  },
  EditRewards: {
    path: "/apps/manage-rewards/:id/edit",
    exact: true,
    component: AddRewards,
    roles: ['Admin'],
  },
  Holidays: {
    path: "/apps/manage-official-holidays",
    exact: true,
    component: Holidays,
    roles: ['Admin'],
  },
  AddHoliday: {
    path: "/apps/manage-official-holidays/add",
    exact: true,
    component: AddHoliday,
    roles: ['Admin'],
  },
  EditHoliday: {
    path: "/apps/manage-official-holidays/:id/edit",
    exact: true,
    component: AddHoliday,
    roles: ['Admin'],
  },

  Promotions: {
    path: "/apps/promotions",
    exact: true,
    component: Promotions,
    roles: ['Admin'],
  },
  AddPromotion: {
    path: "/apps/promotions/add",
    exact: true,
    component: AddPromotion,
    roles: ['Admin'],
  },
  EditPromotion: {
    path: "/apps/promotions/:id/edit",
    exact: true,
    component: AddPromotion,
    roles: ['Admin'],
  },
  
};

export default routes;
