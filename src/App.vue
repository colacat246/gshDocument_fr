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
      articles: [],
    };
  },
  async created() {
    const res = await fetch('http://localhost:4999/api/articlelist');
    this.articles = await res.json();
    console.log(this.articles);
  },
};
</script>

<style lang="less" scoped>
@header-height: 4rem;
@footer-height: 1.5rem;
@main-width: 17rem;
h1 {
  margin: 0;
  text-align: center;
  color: #fff;
  font: normal 1.5rem 'consolas', '宋体';
  line-height: @header-height;
}
.container {
  display: grid;
  grid-template: @header-height calc(100vh - @header-height - @footer-height) @footer-height / @main-width calc(
      100vw - @main-width
    );
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
  box-sizing: border-box;
}
header {
  background: #0083d0;
  grid-area: 1 / 1 / span 1 / span 1;
}
aside {
  grid-area: 2 / 1 / span 1 / span 1;
  // border: 1px solid red;
  box-sizing: border-box;
}
main {
  grid-area: 1 / 2 / span 2 / span 1;
  box-sizing: border-box;
}
footer {
  background: #222d32;
  grid-area: 3 / 1 / span 1 / span 2;
}
</style>
