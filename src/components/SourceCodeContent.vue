<template>
  <div class="article-title-container">
    <div class="resource-title">title</div>
    <div class="prompt-hint" v-show="downloadingArticle">正在下载...</div>
    <button @click="download">下载文章</button>
  </div>
  <div class="code-item" v-for="item in codeList" :key="item.id">
    <div class="title-container">
      <span class="resource-title">{{ item.title }}</span>
      <div class="prompt-hint" v-show="showList[item.id]">
        {{ copyHint[showList[item.id]] }}
      </div>
      <button
        type="button"
        v-clipboard:copy="item.content"
        v-clipboard:success="onCopy"
        v-clipboard:error="onFail"
        :id="item.id"
      >
        复制代码
      </button>
    </div>
    <!-- 这样写build之后无效果 -->
    <!-- <highlightjs class="code" language="c" :code="item.content" /> -->
    <!-- 这样写可以 -->
    <div v-highlight class="code">
      <pre>
        <code>
        {{ item.content }}
      </code>
    </pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloadingArticle: false,
      showList: {},
      copyHint: {
        0: '',
        1: 'copied successfully',
        2: 'failed',
      },
      codeList: [],
    };
  },
  computed: {
    code() {
      return this.codeList[0]['content'];
    },
  },
  methods: {
    onCopy(v) {
      this.showList[v.trigger.getAttribute('id')] = 1;
      console.log(this.showList);
      setTimeout(() => {
        this.showList[v.trigger.getAttribute('id')] = 0;
      }, 1000);
      // alert('copied');
    },
    onFail() {
      alert('failed');
    },
    download() {
      this.downloadingArticle = true;
      fetch(
        `${this.$store.state.baseUrl}/api/downloadArticle/${this.$route.params.id}`
      )
        .then((res) => res.blob())
        .then((blob) => {
          const a = window.document.createElement('a');
          const url = window.URL.createObjectURL(blob);
          const fileName = 'test.pdf';
          a.href = url;
          a.download = fileName;
          a.click();
          this.downloadingArticle = false;
          window.URL.revokeObjectURL(url);
        });
    },
  },
  created() {
    fetch(
      `${this.$store.state.baseUrl}/api/sourcecodeSrc/${this.$route.params.id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.codeList = json;
      })
      .then(() => {
        this.codeList.forEach((i) => {
          this.showList[i.id] = 0;
        });
      });
  },
};
</script>

<style lang="less" scoped>
.article-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
}
.resource-title {
  display: inline-block;
  margin: 1rem;
  padding: 0.3rem;
  text-align: center;
  border-radius: 0.3rem;
  background: #025686;
}
.title-container {
  // font-size: 0.9rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
}
button {
  align-self: center;
}
.prompt-hint {
  padding: 0.5rem;
  background: green;
  // opacity: 0.8;
  border-radius: 0.5rem;
  // color: green;
}
.code {
  margin: 0 auto;
  // border: 1px solid red;
  width: 90%;
}
pre {
  margin: 0;
  padding: 0;
}
.download {
  padding: 1rem 0;
  text-align: center;
}
</style>
