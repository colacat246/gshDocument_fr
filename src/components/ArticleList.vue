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
  margin: 0 auto;
  border: 1px solid gray;
}
</style>
