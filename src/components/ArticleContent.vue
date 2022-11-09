<template>
  <iframe
    :src="`/tests/article${$route.params.id}.html`"
    name="article"
    scrolling="auto"
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
};
</script>

<style lang="less" scoped>
iframe {
  border: none;
  height: 100%;
  width: 100%;
}
</style>
