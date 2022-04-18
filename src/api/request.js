import axios from "axios";
import Vue from "vue";
import router from "@/router";

const requests = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// 响应拦截器
requests.interceptors.response.use(
  (response) => {
    switch (response.data.code) {
      case 40001:
        Vue.prototype.$message({
          type: "error",
          message: response.data.message,
        });
        break;
      case 50000:
        Vue.prototype.$message({
          type: "error",
          message: response.data.message,
        });
        break;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default requests;
