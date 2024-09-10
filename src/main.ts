import './assets/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import auth from '@/services/auth';

const app = createApp(App);

auth.initializeAuthState();
app.use(router);

app.mount('#app');
