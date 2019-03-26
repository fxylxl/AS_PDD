<template>
<div class="search">
  <search-nav></search-nav>
  <div class="shop">
    <!-- 左边-->
    <div class=" menu-wrapper ">
      <ul>
        <li class=" menu-item"
            v-for="(sort,index) in searchsort"
            :key="index"
            :class="{current : index === currentIndex}"
            v-on:click="clickLeftItem(index)"
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
              <img :src="goods.icon" alt="">
              <span>{{goods.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    import BScroll from 'better-scroll'


    import {mapState} from 'vuex'
    import SearchNav from './children/SearchNav.vue'
    export default {
        name: "Search",

        data(){
          return{
            scrollY:0,//右侧列表滑动的坐标（实时更新）
            rightLiTops:[], //所有分类的头部位置
          }
        },
        components:{
          SearchNav
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
            let leftScroll = new BScroll('.menu-wrapper',{});
            this.rightScroll = new BScroll('.shop-wrapper',{
              probeType: 3
            });
            //监听右侧的滑动事件
            this.rightScroll.on('scroll',(pos)=> {
              this.scrollY = Math.abs(pos.y);
              console.log(this.scrollY);
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
            color: #666
            font-size: 14px
            font-weight: lighter
            img
              width: 60%
              height:60%
              margin-bottom:5px

</style>
