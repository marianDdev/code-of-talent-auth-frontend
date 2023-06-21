import { createRouter, createWebHistory } from 'vue-router';

import LoginForm from '../components/LoginForm.vue';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
