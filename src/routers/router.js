import { createRouter, createWebHashHistory } from 'vue-router';
import IndexSection from '../components/IndexSection.vue';
import ArticleSectionVue from '../components/ArticleSection.vue';
import ArticleContentVue from '../components/ArticleContent.vue';
import SourceCodeContentVue from '../components/SourceCodeContent.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: IndexSection,
    },
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
