import { reqCode, reqUserLogin, reqRegister } from "@/api";
import { getToken, setToken } from "@/utils/token";
const state = {
  code: "",
  token: getToken(),
};
const mutations = {
  CODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
};
const actions = {
  //获取验证码
  async getCode({ commit }, email) {
    let result = await reqCode(email.email);
    if (result.code == 20000) {
      commit("CODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //用户注册
  async userRegister({ commit }, params) {
    let result = await reqRegister(params);

    if (result.data.code == 20000) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //登录业务
  async userLogin({ commit }, params) {
    let result = await reqUserLogin(params);
    if (result.code == 20000) {
      commit("USERLOGIN", result.data.token);
      setToken(result.data.token);
      return result;
    } else {
      return result;
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
