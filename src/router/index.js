
import Vue from 'vue'
import Router from 'vue-router'

// import Home from './../pages/Home/Home.vue'
// import Search from './../pages/Search/Search.vue'
// import Chat from './../pages/Chat/Chat.vue'
// import Me from './../pages/Me/Me.vue'
// import Recommend from './../pages/Recommend/Recommend.vue'
// import Login from './../pages/Login/Login.vue'

//一级路由 懒加载
const Home = ()=>import('./../pages/Home/Home.vue');
const Search = ()=>import('./../pages/Search/Search.vue');
const Chat = ()=>import('./../pages/Chat/Chat.vue');
const Me = ()=>import('./../pages/Me/Me.vue');
const Recommend = ()=>import('./../pages/Recommend/Recommend.vue');
const Login = ()=>import('./../pages/Login/Login.vue');


//二级路由
import Hot from '../pages/Home/Children/Hot/Hot.vue'
import Box from './../pages/Home/Children/Box.vue'
import Dress from './../pages/Home/Children/Dress.vue'
import Ele from './../pages/Home/Children/Ele.vue'
import Food from './../pages/Home/Children/Food.vue'
import General from './../pages/Home/Children/General.vue'
import Man from './../pages/Home/Children/Man.vue'
import Mbaby from './../pages/Home/Children/Mbaby.vue'
import Shirt from './../pages/Home/Children/Shirt.vue'

import MeSetting from './../pages/Me/MeSetting.vue'
import MeDetail from './../pages/Me/MeDetail.vue'


Vue.use(Router);

//路由输出对象

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      children:[
        //热门板块
        //二级路由不用加'/'
        {path:'hot', component:Hot,   meta:{showBottomTabBar:true} },
        {path:'box', component:Box },
        {path:'dress', component:Dress },
        {path:'ele', component:Ele },
        {path:'food', component:Food },
        {path:'general', component:General },
        {path:'man', component:Man },
        {path:'mbaby', component:Mbaby },
        {path:'shirt', component:Shirt },
        {path:'/home', redirect:'/home/hot'}
      ],

    },
    {
      path:'/search',
      component:Search,
      meta:{showBottomTabBar:true}
    },
    {
      path:'/chat',
      component:Chat,
      meta:{showBottomTabBar:true}
    },
    {
      path:'/me',
      component:Me,
      meta:{showBottomTabBar:true}
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/recommend',
      component:Recommend,
      meta:{showBottomTabBar:true}
    },
    {
      path:'/setting',
      component:MeSetting,
    },
    {
      path:'/detail',
      component:MeDetail,
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
