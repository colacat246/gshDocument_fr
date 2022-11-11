import { createApp } from 'vue';
import router from './routers/router.js';
import './normalize.css';
import './style.css';
import App from './App.vue';
import store from './store/index.js';
// highlightjs
import 'highlight.js/styles/a11y-dark.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import VueClipboard from 'vue3-clipboard';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(hljsVuePlugin);
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});
app.mount('#app');
