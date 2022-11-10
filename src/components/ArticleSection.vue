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
    display: flex;
    justify-content: space-around;
    align-self: stretch;
    background: #3b3b3b;
    // border-bottom: 1px solid #777;

    .article-section-router {
      padding: 0.4rem;
      text-align: center;
      flex-grow: 1;
      &:hover {
        background: #434343;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
    }

    .router-link-active {
      background: #2e2e2e;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
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
