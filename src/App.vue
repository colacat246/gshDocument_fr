<template>
  <div class="container">
    <header><h1>GSH Document</h1></header>
    <aside>list list</aside>
    <main>main frame</main>
    <footer>this is the footer</footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
}
h1 {
  text-align: center;
  font-size: 1.8rem;
}
.container {
  display: grid;
  grid-template: 5rem auto 1.5rem / 17rem auto;
  height: 100vh;
  width: 100vw;
}
header {
  background: dodgerblue;
  grid-area: 1 / 1 / span 1 / span 1;
}
aside {
  background: green;
  grid-area: 2 / 1 / span 1 / span 1;
}
main {
  background: red;
  grid-area: 1 / 2 / span 2 / span 1;
}
footer {
  background: gold;
  grid-area: 3 / 1 / span 1 / span 2;
}
</style>
