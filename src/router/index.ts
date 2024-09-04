import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '@/pages/LogIn.vue';
import Home from '@/pages/Home.vue';

const routes = [
  { path: '/', component: LogIn },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;