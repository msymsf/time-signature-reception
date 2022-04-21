import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    roleList: null,
    avatar: null,
    nickname: null,
    intro: null,
    email: null,
    username: null,
  },
  mutations: {
    login(state, user) {
      state.userId = user.userInfoId;
      state.roleList = user.roleList;
      state.avatar = user.avatar;
      state.nickname = user.nickname;
      state.intro = user.intro;
      state.email = user.email;
      state.username = user.username;
    },
    logout(state) {
      state.userId = null;
      state.roleList = null;
      state.avatar = null;
      state.nickname = null;
      state.intro = null;
      state.email = null;
      state.username = null;
    },
  },
  actions: {},
  modules: {
    user,
  },
  plugins: [
    //自动将vuex的state保存在sessionStorage的插件
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
