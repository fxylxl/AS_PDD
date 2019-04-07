// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'

import LyTab from 'ly-tab'
import router from './router/index'

Vue.use(LyTab);
Vue.config.productionTip = false;

//配置字体图标
import "@/common/css/style.css";

//配置mint-ui
import {Actionsheet} from 'mint-ui';
Vue.component(Actionsheet.name,Actionsheet);
import {DatetimePicker} from 'mint-ui';
Vue.component(DatetimePicker.name,DatetimePicker);

//配置图片的懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload,{
  // loading:loading,
  loading
});






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
