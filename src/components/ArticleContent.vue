<template>
  <!-- :src="`/tests/article${$route.params.id}.html`" -->
  <!-- :src="`/tests/GSH_test.html`" -->
  <iframe
    ref="content"
    :src="articleSrc"
    name="article"
    sandbox="allow-same-origin"
  ></iframe>
</template>

<script>
export default {
  data() {
    return {
      articleSrc: '',
    };
  },
  mounted() {
    this.articleSrc = `http://localhost:4999/api/articleSrc/${this.$route.params.id}/${this.$refs.content.clientWidth}`;
  },
  watch: {
    $route() {
      this.articleSrc = `http://localhost:4999/api/articleSrc/${this.$route.params.id}/${this.$refs.content.clientWidth}`;
    },
  },
};
</script>

<style lang="less" scoped>
iframe {
  display: block;
  border: none;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
