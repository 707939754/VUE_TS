import Vue from "vue";
import App from "./views/index";//这里是入口
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

// 全局注册组件
Vue.component("app-head", () => import("./components/AppHead/AppHead"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
