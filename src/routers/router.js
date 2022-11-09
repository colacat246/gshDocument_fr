import { createRouter, createWebHashHistory } from 'vue-router';
import ArticleSectionVue from '../components/ArticleSection.vue';
import ArticleContentVue from '../components/ArticleContent.vue';
import SourceCodeContentVue from '../components/SourceCodeContent.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      props: true,
      path: '/main/:id',
      component: ArticleSectionVue,
      children: [
        { path: 'article', component: ArticleContentVue },
        { path: 'sourcecode', component: SourceCodeContentVue },
      ],
    },
  ],
});
export default router;
