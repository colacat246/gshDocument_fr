<template>
  <ul>
    <li
      class="list-item"
      v-for="item in $store.state.articleList"
      :key="item.id"
      @click="$router.push(`/main/${item.id}/article`)"
    >
      <div class="list-id">{{ normId(item.id) }}.</div>
      <!-- <div class="list-id">111.</div> -->
      <div>&ensp;{{ item.title }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    normId(v) {
      if (v < 10) {
        return `  ${v}`;
      }
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  background: #3b3b3b;
  box-sizing: border-box;
  padding: 0.1rem 0;
  height: 100%;
  overflow-y: scroll;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    width: 0;
  }
  .list-item {
    display: flex;
    padding: 0.3rem 1.2rem;
    font: 0.9rem 'monospace' '宋体';
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      background: #434343;
      cursor: pointer;
    }
    .list-id {
      width: 2.1rem;
      overflow: hidden;
      text-align: right;
    }
  }
}
</style>
