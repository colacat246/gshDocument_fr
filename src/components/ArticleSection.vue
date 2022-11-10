<template>
  <div class="article-section-container">
    <header>
      <router-link class="article-section-router" :to="`/main/${id}/article`"
        >article</router-link
      >
      <router-link class="article-section-router" :to="`/main/${id}/sourcecode`"
        >source code</router-link
      >
    </header>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>

<style lang="less" scoped>
.article-section-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  header {
    box-sizing: border-box;
    padding: 0.2rem;
    display: flex;
    justify-content: space-around;
    align-self: stretch;

    .article-section-router {
      margin: 0.2rem;
      border: 1px solid grey;
      width: 10rem;
      padding: 0.4rem;
      text-align: center;
    }
  }
  .content-container {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>
