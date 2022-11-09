<template>
  <div>
    <header>
      <router-link :to="`/main/${id}/article`">article</router-link>
      <router-link :to="`/main/${id}/sourcecode`">source code</router-link>
    </header>
    <router-view class="article-view"></router-view>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  box-sizing: border-box;
}
header {
  background: chartreuse;
  display: flex;
  justify-content: space-around;

  * {
    margin: 0.2rem;
    border: 1px solid grey;
    width: 10rem;
    padding: 0.2rem;
    text-align: center;
  }
}
</style>
