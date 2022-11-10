<template>
  <iframe
    :src="`/tests/article${$route.params.id}.html`"
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
