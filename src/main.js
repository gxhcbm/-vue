// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/animate.css/animate.css'
import Axios from 'axios'




import ElementUI from 'element-ui'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

//引入全局main.scss
import '@/style/main.scss'
Vue.config.productionTip = true
import store from '@/store'


//使用element-ui作为们的前端框架
Vue.use(ElementUI,{

})






//请求拦截
Axios.interceptors.response.use(function (response) {

    return response.data;
  }, function (error) {

    return Promise.reject(error);
  });
Vue.prototype.$axios=Axios //挂载axios 便于组件使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
