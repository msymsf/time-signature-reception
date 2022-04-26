import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { Overlay } from "vant";
import VeeValidate from "vee-validate";
import { Badge } from "vant";
import { Calendar } from "vant";
import { Swipe, SwipeItem } from "vant";
import { CountDown } from "vant";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(CountDown);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Calendar);
Vue.use(Badge);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Overlay);

const config = {
  errorBagName: "errorBags",
  fieldsBagName: "fieldBags",
  delay: 0,
  locale: "en",
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: "touched",
    untouched: "untouched",
    valid: "valid",
    invalid: "invalid",
    pristine: "pristine",
    dirty: "dirty",
  },
  events: "input|blur",
  inject: true,
};
Vue.use(VeeValidate, config);

new Vue({
  router,
  store,
  el: "#app",
  axios,
  render: (h) => h(App),
}).$mount("#app");
