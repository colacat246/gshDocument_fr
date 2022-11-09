<template>
  <div class="container">
    <header><h1>GSH Document</h1></header>
    <aside>
      <ArticleListVue :articles="articles"></ArticleListVue>
    </aside>
    <main><router-view></router-view></main>
    <footer>copyright xxx maintained by colacat246</footer>
  </div>
</template>

<script>
import ArticleListVue from './components/ArticleList.vue';
export default {
  components: { ArticleListVue },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'art1',
          articlePath: '/tests/article1.html',
          sourceCodePath: '/tests/source1.c',
        },
        {
          id: 2,
          title: 'art2',
          articlePath: '/tests/article2.html',
          sourceCodePath: '/tests/source2.c',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  font-size: 1.8rem;
}
.container {
  display: grid;
  grid-template: 5rem auto 1.5rem / 17rem auto;
  height: 100vh;
  width: 100vw;
}
header {
  background: dodgerblue;
  grid-area: 1 / 1 / span 1 / span 1;
}
aside {
  background: green;
  grid-area: 2 / 1 / span 1 / span 1;
}
main {
  background: red;
  grid-area: 1 / 2 / span 2 / span 1;
  position: relative;
}
footer {
  background: gold;
  grid-area: 3 / 1 / span 1 / span 2;
}
</style>
