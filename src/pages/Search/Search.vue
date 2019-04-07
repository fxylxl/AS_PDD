<template>
<div class="search">
  <!--搜索导航-->
  <search-nav :isShowSearchPanel="isShowSearchPanel"></search-nav>
  <!--联动列表-->
  <div class="shop">
    <!-- 左边-->
    <div class=" menu-wrapper ">
      <ul>
        <li class=" menu-item"
            v-for="(sort,index) in searchsort"
            :key="index"
            :class="{current : index === currentIndex}"
            v-on:click="clickLeftItem(index)"
            ref="menulist"
        >
          <span>{{sort.sort_name}}</span>
        </li>
      </ul>
    </div>
    <!--右边-->
    <div class="shop-wrapper">
      <ul ref="shopsParent">
        <li class="shops-li" v-for="(sort,index1) in searchsort" :key="index1" >
          <div class="shops-title">
            <h4>{{sort.sort_name}}</h4>
            <a href="">查看更多 ></a>
          </div>
          <ul class="shops-items">
            <li v-for="(goods,index3) in searchgoods" :key="index3" v-if="sort.sort_name == goods.name">
              <img v-lazy="goods.icon" alt="">
              <span>{{goods.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
   <!--搜索面板-->
  <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel"></search-panel>
</div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    import SearchNav from './children/SearchNav.vue'
    import SearchPanel from './children/SearchPanel.vue'
    export default {
        name: "Search",

        data(){
          return{
            scrollY:0,//右侧列表滑动的坐标（实时更新）
            rightLiTops:[], //所有分类的头部位置
            isShow:false,//设置搜索面板的显示
          }
        },
        components:{
          SearchNav,
          SearchPanel
        },

        computed:{
          ...mapState(['searchgoods']),
          ...mapState(['searchsort']),
          //用于动态决定左侧那个被选中
          currentIndex(){
            //1.1 获取数据
            const {scrollY,rightLiTops} = this;
            //1.2 取出索引
            return rightLiTops.findIndex((liTops,index)=>{
              this._leftScroll(index);
              return scrollY >= liTops && scrollY < rightLiTops[index + 1];

            })

          }
        },
        mounted(){
          this.$store.dispatch('reqSearchGoods');
          this.$store.dispatch('reqSearchSort')
        },
        watch:{
          searchsort(){
            this.$nextTick(()=>{
              //1.1初始化
              this._initBScroll();
              //1.2求出右边板块所有头部的位置
              this._initRightTops();
            })
          }

        },
        methods:{
          //1.1初始化
          _initBScroll(){
            this.leftScroll = new BScroll('.menu-wrapper',{});
            this.rightScroll = new BScroll('.shop-wrapper',{
              probeType: 3
            });
            //监听右侧的滑动事件
            this.rightScroll.on('scroll',(pos)=> {
              this.scrollY = Math.abs(pos.y);
            })

          },
          //1.2 求出所有板块的头部位置
          _initRightTops(){
            //1.2.1临时数组
            const tempArr=[];
            //1.2.2定义变量记录高度
            let top = 0;
            tempArr.push(top);
            //遍历li标签，取出高度
            let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li');
            //转成真数组
            Array.prototype.slice.call(allLis).forEach(li=>{
              top += li.clientHeight;
              tempArr.push(top);
            });
            //更新数据
            this.rightLiTops = tempArr;

          },
          //1.3 点击切换
          clickLeftItem(index){
            this.scrollY = this.rightLiTops[index];
            this.rightScroll.scrollTo(0,-this.scrollY,300)
          },
          //1.4左侧联动
          _leftScroll(index){
            let menulists = this.$refs.menulist;
            let el=menulists[index];
            this.leftScroll.scrollToElement(el,300,0,-100)
          },
          //1.5设置搜索面板设置
          isShowSearchPanel(flag){
            this.isShow = flag;
          }

        },

    }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .search
    background: #f5f5f5
    width: 100%
    height: 100%
    overflow: hidden
    .shop
      display: flex
      position: absolute
      top 60px
      bottom 50px
      width: 100%
      overflow: hidden
      .menu-wrapper
        width: 80px
        flex: 0 0 80px
        .menu-item
          width: 100%
          height: 60px
          background-color: #fafafa
          display: flex
          justify-content: center
          align-items:center
          font-weight:lighter
          color: #666
          position: relative
        .current
          color: #e02e24
          background: #fff
        .current::before
          content: ''
          background-color: #e02e24
          width: 4px
          height: 30px
          position: absolute
          left:0
      .shop-wrapper
        flex: 1
        background-color: #fff
        /*overflow-y scroll*/
        .shops-title
          display: flex
          flex-direction row
          padding:0 10px
          height: 44px
          align-items:center
          justify-content: space-between
          color: #999999
          a
            color: #999999
            text-decoration: none
            font-weight:lighter
        .shops-items
          display: flex
          flex-wrap: wrap
          li
            display: flex
            flex-direction:column
            width:33.3%
            height: 90px
            justify-content: center
            align-items: center
            color: #000
            font-size: 14px
            font-weight: lighter
            img
              width: 60%
              height:60%
              margin-bottom:5px

</style>
