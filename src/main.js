import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createI18n } from 'vue-i18n';
import vnMessage from './lang/vn.json';
import enMessage from './lang/en.json';
const messages = {
  vn: vnMessage,
  en: enMessage,
};

const i18n = new createI18n({
  locale: 'en', // set locale
  messages,
  fallbackLocale: 'en',
});

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');
