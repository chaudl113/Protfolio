import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/uses',
    name: 'Uses',
    component: () => import('@/views/Uses.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/resume.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
