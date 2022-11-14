<template>
  <div class="index-container" ref="indexContainer">
    <h1>欢迎来到重言文档</h1>
    <pre>
        <code ref="asciiGraph">
        {{ $store.state.welcomeLine }}
      </code>
      </pre>
  </div>
</template>

<script>
export default {
  methods: {
    autoFit() {
      const ele = this.$refs.indexContainer;
      let ratio = ele.clientWidth / 1000;
      ele.style.transform = `scale(${ratio})`;
    },
  },
  mounted() {
    this.autoFit();
    window.addEventListener('resize', this.autoFit);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.autoFit);
  },
};
</script>

<style lang="less" scoped>
.index-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  letter-spacing: 1.2rem;
}
</style>
