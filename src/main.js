import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css';
import locale from 'element-ui/lib/locale/lang/en'; // lang i18n

import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'magnific-popup';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import App from './App';
import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control

// Waypoint plugin
Vue.use(VueWaypoint);

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
