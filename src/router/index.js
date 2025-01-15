// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AdminPanel from '../components/AdminPanel.vue';
import CategoryPage from '../views/CategoryPage.vue';
import MenneskerPage from '../views/MenneskerPage.vue';
import HestePage from '../views/HestePage.vue';
import HundePage from '../views/HundePage.vue';
import KattePage from '../views/KattePage.vue';
import CartPage from '../views/CartPage.vue';
import ProductPage from '../views/ProductPage.vue';
import BlogPage from '../views/BlogPage.vue';
import BlogPostPage from '../views/BlogPostPage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import PaymentPage from '../views/PaymentPage.vue';
import UserPanel from '../components/UserPanel.vue';

// Import the authStore to guard routes
import { useAuthStore } from '../stores/authStore';

const routes = [
  {
    path: '/admin',
    component: AdminPanel,
    // Route-level guard to ensure only authenticated + verified + admin
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated() || !authStore.isVerified() || !authStore.isAdmin()) {
        // If not allowed, redirect to login (or anywhere else)
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/user-panel',
    component: UserPanel, 
    // Route-level guard to ensure only authenticated and verified users
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated()) {
        // If not allowed, redirect to login (or anywhere else)
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/category/mennesker',
    component: MenneskerPage,
  },
  {
    path: '/category/heste',
    component: HestePage,
  },
  {
    path: '/category/hunde',
    component: HundePage,
  },
  {
    path: '/category/katte',
    component: KattePage,
  },
  {
    path: '/category/:name',
    component: CategoryPage,
  },
  {
    path: '/product/:id',
    component: ProductPage,
  },
  {
    path: '/payment',
    component: PaymentPage,
  },
  {
    path: '/blog',
    component: BlogPage,
  },
  {
    path: '/blog/:id',
    component: BlogPostPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link', 
  linkExactActiveClass: 'exact-active-link',
});

// Global guard example: Requires user to be logged in + verified for /cart or /payment
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const authRequiredRoutes = ['/cart', '/payment'];

  // If the path is in authRequiredRoutes, check if user is logged in + verified
  if (
    authRequiredRoutes.includes(to.path) &&
    (!authStore.isAuthenticated() || !authStore.isVerified())
  ) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
