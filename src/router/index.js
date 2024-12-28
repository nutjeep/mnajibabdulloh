import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/pages/HomeView.vue';
import Portfolio from '../views/pages/Portfolio.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;