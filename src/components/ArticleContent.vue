<template>
  <!-- :src="`/tests/article${$route.params.id}.html`" -->
  <!-- :src="`/tests/GSH_test.html`" -->
  <iframe
    :class="{ onload: !show }"
    ref="content"
    :src="articleSrc"
    name="article"
    sandbox="allow-same-origin"
  ></iframe>
  <div class="loading" v-if="!show">loading...</div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      articleSrc: '',
    };
  },
  mounted() {
    this.articleSrc = `${this.$store.state.baseUrl}/api/articleSrc/${this.$route.params.id}/${this.$refs.content.clientWidth}`;
  },
  watch: {
    $route() {
      this.show = false;
      this.$refs.content.addEventListener('load', () => {
        this.show = true;
        // this.$forceUpdate();
      });
      this.articleSrc = `${this.$store.state.baseUrl}/api/articleSrc/${this.$route.params.id}/${this.$refs.content.clientWidth}`;
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

.onload {
  opacity: 0.2;
}

.loading {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-size: 3rem;
  color: #0083d0;
  top: 50vh;
  left: 50vw;
}
</style>
