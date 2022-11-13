import { createStore } from 'vuex';

const store = createStore({
  state: {
    baseUrl: 'http://localhost:4999',
    articleList: [],
    welcomeLine: String.raw`
 __     __     ______     __         ______     ______     __    __     ______    
/\ \  _ \ \   /\  ___\   /\ \       /\  ___\   /\  __ \   /\ "-./  \   /\  ___\   
\ \ \/ ".\ \  \ \  __\   \ \ \____  \ \ \____  \ \ \/\ \  \ \ \-./\ \  \ \  __\   
 \ \__/".~\_\  \ \_____\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \ \_\  \ \_____\ 
  \/_/   \/_/   \/_____/   \/_____/   \/_____/   \/_____/   \/_/  \/_/   \/_____/ 
`
  },
  mutations: {
    updateArticleList(state, newData) {
      state.articleList = newData;
    }
  }
});

export default store;
