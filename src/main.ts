import Vue from "vue";
import App from "./views/index";//这里是入口
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/default.less";

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
// const axios () => import('axios'))
// Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false;

// 全局注册组件
Vue.component("app-head", () => import("./components/AppHead/AppHead"));
Vue.component("app-upload", () => import("./components/AppUpload/AppUpload.vue"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
