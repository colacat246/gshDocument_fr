<template>
  <ul>
    <li
      v-for="item in articles"
      :key="item.id"
      @click="$router.push(`/main/${item.id}/article`)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['articles'],
};
</script>

<style lang="less" scoped>
ul {
  box-sizing: border-box;
  padding: 0.1rem 0;
  height: 100%;
  overflow-y: scroll;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    width: 0;
  }
  li {
    padding: 0.15rem 1.5rem;
    font: 0.9rem 'consolas', '宋体';
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      border-bottom: 1px solid #ddd;
      cursor: pointer;
    }
  }
}
</style>
