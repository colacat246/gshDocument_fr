<template>
  <!-- :src="`/tests/article${$route.params.id}.html`" -->
  <!-- :src="`/tests/GSH_test.html`" -->
  <div class="iframe-container" ref="content">
    <iframe
      :class="{ onload: !show }"
      ref="iframe"
      :src="articleSrc"
      name="article"
      sandbox="allow-scripts"
    ></iframe>
    <div class="loading" v-if="!show">正在加载...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      articleSrc: '',
    };
  },
  methods: {
    autoFit() {
      // 计算iframe自适应尺寸
      const width = this.$refs.content.clientWidth;
      const height = this.$refs.content.clientHeight;
      const widthFromPdf = 1200 + 30;
      const ratio = width / widthFromPdf;
      const heightOri = height / ratio;
      this.$refs.iframe.style.height = heightOri + 'px';
      this.$refs.iframe.style.transform = `scale(${ratio})`;
    },
    getContent() {
      this.show = false;
      const path = `${this.$store.state.baseUrl}/api/articleSrc/${this.$route.params.id}`;
      fetch(path).then((res) => {
        if (res.status === 200) {
          this.articleSrc = path;
        } else {
          this.$router.push('/');
        }
      });
    },
  },
  mounted() {
    // 添加窗口监听
    window.addEventListener('resize', this.autoFit);
    this.autoFit();
    this.$refs.iframe.addEventListener('load', () => {
      this.show = true;
    });
    this.getContent();
  },
  watch: {
    $route() {
      this.autoFit();
      this.getContent();
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.autoFit);
  },
};
</script>

<style lang="less" scoped>
.iframe-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  // position: relative;
  // padding: 0;
}

iframe {
  display: block;
  width: 1200px + 30px;
  // height: 100%;
  transform-origin: left top;
  border: none;
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
