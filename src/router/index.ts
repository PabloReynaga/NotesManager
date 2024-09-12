import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '@/pages/LogIn.vue';
import Home from '@/pages/Home.vue';
import auth from '@/services/auth.ts';
import Notes from '@/pages/Notes.vue';

const routes = [
  { name: 'login', path: '/', component: LogIn },
  { name: 'home', path: '/home', component: Home, meta: { authRequired: true } },
  { name: 'notes', path: '/notes', component: Notes, meta: { authRequired: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    // Check if the user is authenticated
    if (!auth.authState.value) {
      next({ name: 'login' }); // Redirect to login if not authenticated
    } else {
      next(); // Allow access if authenticated
    }
  } else if (to.name === 'login' && auth.authState.value) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
