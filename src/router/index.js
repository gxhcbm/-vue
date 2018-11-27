import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home'
import Cartoon from '../components/pages/paging/Cartoon'
import Drama from '../components/pages/paging/Drama'
import Create from '../components/pages/paging/Create'
import Music from '../components/pages/paging/Music'
import Details from '../components/pages/paging/Details'
//import My from '../components/pages/paging/My'
//import Login from '../components/pages/paging/Login'
//import Register from '../components/pages/paging/Register'
import store from '@/store'

//
//Vue.use(Router)
//
//
//export default new Router({
//routes: [
//  {
//    path: '/',
//    redirect:'/Home'
//  },
//    {
//    path: '/home',
//    name: 'Home',
//    component: Home
//  },
//    {
//    path: '/cartoon',
//    name: 'Cartoon',
//    component: Cartoon
//  },
//    {
//    path: '/drama',
//    name: 'Drama',
//    component:Drama
//  },
//    {
//    path: '/create',
//    name: 'Create',
//    component: Create
//  },
//        {
//    path: '/music',
//    name: 'Music',
//    component: Music
//  },
//    {
//    path: '/details',
//    name: 'Details',
//    component: Details
//  },
//  {
//    path: '/my',
//    name: 'My',
//    component: My
//  },
//    {
//    path: '/login',
//    name: 'Login',
//    component: Login
//  },
//  {
//    path: '/register',
//    name: 'Register',
//    component: Register
//  },
//]
//})









const Login = resolve=>{
require.ensure(['../components/pages/paging/Login.vue'],()=>{
    resolve(require('../components/pages/paging/Login.vue'));
})
}
const  My = resolve=>{
require.ensure(['../components/pages/paging/My.vue'],()=>{
    resolve(require('../components/pages/paging/My.vue'));
})
}
const  Register = resolve=>{
require.ensure(['../components/pages/paging/Register.vue'],()=>{
    resolve(require('../components/pages/paging/Register.vue'));
})
}


Vue.use(Router)
const router = new Router({
  //去除#号
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      //  在需要权限的页面中添加一个requireAuth字段,写在meta里面
      meta:{
        requiresAuth:true

      }
    },
     {
      path: '/',
      redirect:'/Home'
    },
      {
      path: '/home',
      name: 'Home',
      component: Home
    },
      {
      path: '/cartoon',
      name: 'Cartoon',
      component: Cartoon
    },
      {
      path: '/drama',
      name: 'Drama',
      component:Drama
    },
      {
      path: '/create',
      name: 'Create',
      component: Create
    },
          {
      path: '/music',
      name: 'Music',
      component: Music
    },
      {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
      {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})

//路由跳转前都会执行
router.beforeEach((to,from,next)=>{
//  获取token
  let token = store.state.token;
  if(to.meta.requiresAuth){
    if(token){
      next();
    }else {
      //token不存在,让他跳转登录界面
      next({
        path:'/login'
      })
    }
  }else{
    // 不需要权限继续往下走
    next();
  }
})

export default router