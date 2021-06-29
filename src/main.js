import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createI18n } from 'vue-i18n';

import config from '../Drake.config';
import TypewriterComponent from './components/Typewriter';

function loadLocaleMessages() {
  const locales = require.context(
    './lang',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
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
  locale: 'en', // set locale
  messages: loadLocaleMessages(),
  fallbackLocale: 'en',
});

const app = createApp(App);
app.config.globalProperties.$config = config;
app.component('typewriter', TypewriterComponent);
app.use(i18n);
app.use(store);
app.use(router);

app.mount('#app');
