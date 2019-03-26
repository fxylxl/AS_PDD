
import Vue from 'vue'
import Router from 'vue-router'

import Home from './../pages/Home/Home.vue'
import Search from './../pages/Search/Search.vue'
import Chat from './../pages/Chat/Chat.vue'
import Me from './../pages/Me/Me.vue'
import Recommend from './../pages/Recommend/Recommend.vue'

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



Vue.use(Router)

//路由输出对象

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      children:[
        //热门板块
        //二级路由不用加'/'
        {path:'hot', component:Hot },
        {path:'box', component:Box },
        {path:'dress', component:Dress },
        {path:'ele', component:Ele },
        {path:'food', component:Food },
        {path:'general', component:General },
        {path:'man', component:Man },
        {path:'mbaby', component:Mbaby },
        {path:'shirt', component:Shirt },
        {path:'/home', redirect:'/home/hot'}
      ]

    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/chat',
      component:Chat
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
