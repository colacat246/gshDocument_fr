import { createStore } from 'vuex';

const store = createStore({
  state: {
    baseUrl: import.meta.env.VITE_BASE_URL,
    articleListAcademic: [],
    articleListBlog: [],
    welcomeLine: String.raw`
 __     __     ______     __         ______     ______     __    __     ______    
/\ \  _ \ \   /\  ___\   /\ \       /\  ___\   /\  __ \   /\ "-./  \   /\  ___\   
\ \ \/ ".\ \  \ \  __\   \ \ \____  \ \ \____  \ \ \/\ \  \ \ \-./\ \  \ \  __\   
 \ \__/".~\_\  \ \_____\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \ \_\  \ \_____\ 
  \/_/   \/_/   \/_____/   \/_____/   \/_____/   \/_____/   \/_/  \/_/   \/_____/ 
`,
  },
  mutations: {
    updateArticleList(state, newData) {
      state.articleListAcademic = newData.academic;
      state.articleListBlog = newData.blog;
    },
  },
});

export default store;
