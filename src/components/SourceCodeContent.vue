<template>
  <div class="code-item" v-for="item in codeList" :key="item.id">
    <div class="title-container">
      <span class="sourcecode-title">{{ item.title }}</span>
      <div class="copy-hint" v-show="showList[item.id]">
        {{ copyHint[showList[item.id]] }}
      </div>
      <button
        type="button"
        v-clipboard:copy="item.content"
        v-clipboard:success="onCopy"
        v-clipboard:error="onFail"
        :id="item.id"
      >
        Copy
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
.title-container {
  font-size: 0.9rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  > * {
    align-self: center;
  }
  .copy-hint {
    padding: 0.5rem;
    background: green;
    // opacity: 0.8;
    border-radius: 0.5rem;
    // color: green;
  }
}
.sourcecode-title {
  display: inline-block;
  margin: 1rem;
  padding: 0.3rem;
  text-align: center;
  border-radius: 0.3rem;
  background: #025686;
  width: auto;
}
.code {
  margin: 0 auto;
  width: 90%;
}
code * {
  font-family: 'consolas';
}
</style>
