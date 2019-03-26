<template>
  <div class="hot">
    <!--首页轮播图-->
    <div class="swiper-container" v-if="homecasual.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key = "index">
           <img :src="casual.imgurl" alt="" width="100%">
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>


    <!--中间导航-->
    <hot-nav></hot-nav>
    <!--广告位-->
    <div class="hot-ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
    </div>
    <!-- 商品类表 -->
    <hot-shop-list></hot-shop-list>


  </div>
</template>

<script>
  import HotNav from './HotNav.vue'
  import HotShopList from './HotShopList.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import {
    mapState
  } from 'vuex'

  export default {
    name: "Hot",
    computed:{
      ...mapState(['homecasual'])
    },
    mounted(){
      //1.从服务器请求轮播图数据
      this.$store.dispatch('reqHomeCasual');
      //2.请求首页导航的数据
      this.$store.dispatch('reqHomeNav');
      //2.请求首页商品列表数据
      this.$store.dispatch('reqHomeShopList');

    },
    components:{
      HotNav,
      HotShopList
    },
    watch:{
      homecasual(){
        this.$nextTick(()=>{
          //创建swiper实例
          new Swiper('.swiper-container',{
            autoplay:true,
            loop:true,
            //分页器
            pagination:{
              el:'.swiper-pagination'
            }
          })
        })
      }
    }


  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top 46px
    background #F5F5F5
    .hot-ad
      background-color: #fff
      margin:8px 0
      padding 10px
</style>
