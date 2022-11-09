<template>
  <iframe
    :src="`/tests/article${$route.params.id}.html`"
    name="article"
    scrolling="auto"
    sandbox="allow-same-origin"
  ></iframe>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
iframe {
  border: none;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
</style>
