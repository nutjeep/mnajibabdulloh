import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/tailwind.css';
import './assets/css/style.css';

const app = createApp(App);
app.use(AOS.init({}));
app.use(store);
app.use(router);
app.mount('#app');