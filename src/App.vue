<template>
  <div class="container">
    <header>
      <h1>重言文档</h1>
    </header>
    <aside>
      <ArticleListVue></ArticleListVue>
    </aside>
    <main><router-view></router-view></main>
    <footer>
      <div></div>
      <div>copyright 重言</div>
      <div>developed and maintained by colacat246</div>
    </footer>
  </div>
</template>

<script setup>
import ArticleListVue from './components/ArticleList.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(async () => {
  const resBlog = await fetch(`${store.state.baseUrl}/api/blogTitles`);
  const dataBlog = await resBlog.json();

  const resAca = await fetch(`${store.state.baseUrl}/api/academicTitles`);
  const dataAca = await resAca.json();
  const dataObj = { academic: dataAca.value, blog: dataBlog.value };
  store.commit('updateArticleList', dataObj);
});
</script>

<style lang="less" scoped>
@header-height: 3.5rem;
@footer-height: 1.6rem;
@list-width: 16rem;
h1 {
  margin: 0;
  text-align: center;
  color: #fff;
  font: bold 1.5rem '宋体';
  // font-size: 1.5rem;
  letter-spacing: 0.8rem;
  line-height: @header-height;
}
.container {
  display: grid;
  grid-template: @header-height calc(100vh - @header-height - @footer-height) @footer-height / @list-width calc(
      100vw - @list-width
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
  overflow: hidden;
}
footer {
  background: #222d32;
  grid-area: 3 / 1 / span 1 / span 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    padding: 0 2rem;
    flex-grow: 1;
    font-size: 0.8rem;
    text-align: right;
  }
}
</style>
