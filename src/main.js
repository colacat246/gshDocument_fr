import { createApp } from 'vue';
import './normalize.css';
import './style.css';
import store from './store/index.js';
// highlightjs
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
// 剪切板
import VueClipboard from 'vue3-clipboard';
// 注意，把router在css之后引入，打包才可以使css生效
import router from './routers/router.js';
import App from './App.vue';
const app = createApp(App);
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
// import hljsVuePlugin from '@highlightjs/vue-plugin';
// import 'highlight.js/lib/common';
// app.use(hljsVuePlugin); // 不用插件了，build之后无效
app.use(store);
app.use(router);
app.mount('#app');
