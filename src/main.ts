import Vue from 'vue';


import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './vuex/index';





Vue.config.productionTip = false


Vue.use(ElementUI, {
  size: 'small' ,
 })


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
