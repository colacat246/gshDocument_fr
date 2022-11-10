<template>
  <div class="code-item" v-for="item in codeList" :key="item.id">
    <div class="sourcecode-title">{{ item.title }}</div>
    <button
          type="button"
          v-clipboard:copy="item.content"
          v-clipboard:success="onCopy"
          v-clipboard:error="onFail"
          :id="item.id"
        >
          Copy
        </button>
        <div v-show="showList[item.id]">{{ copyHint[showList[item.id]] }}</div>
    <highlightjs class="code" autodetect :code="item.content" />
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
      codeList: [
        { id: 1, title: 'test.c', content: '' },
        { id: 2, title: '2.c', content: '' },
      ],
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
    fetch('http://localhost:8000')
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        this.codeList[0]['content'] = text;
        this.codeList[1]['content'] = 'int a = 1;';
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
.code {
  margin: 0 auto;
  width: 90%;
}
</style>
