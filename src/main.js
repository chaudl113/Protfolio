import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import config from '../Drake.config';

import { createI18n } from 'vue-i18n';

import animatedScrollObserver from '@/constants/scrollanimation';

function loadLocaleMessages() {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
const i18n = new createI18n({
  locale: 'vn', // set locale
  messages: loadLocaleMessages(),
  fallbackLocale: 'vn',
});

const app = createApp(App);
app.config.globalProperties.$config = config;
app.directive('scrollanimation', {
  beforeMount(el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  },
});

app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');
