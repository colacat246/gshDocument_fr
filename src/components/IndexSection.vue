<template>
  <div class="index-container">
    <h1>欢迎来到重言文档</h1>
    <pre>
        <code>
        {{ $store.state.welcomeLine }}
      </code>
      </pre>
  </div>
</template>

<script>
export default {};
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
