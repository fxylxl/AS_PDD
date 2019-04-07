<template>
  <div class="recommend-container" >
    <ul class="recommend" v-if="userInfo.id && recommendshoplist.length>0">
      <shop-list
        tag="li"
        v-for="(item,index) in recommendshoplist"
        :item=item
        :key="index"
        :clickCellBtn="dealWithCellBtnClick"
      >
      </shop-list>
    </ul>
    <select-login v-else ></select-login>
  </div>

</template>

<script>
    import {mapState} from 'vuex';
    import ShopList from './../../components/ShopList/ShopList.vue';
    import BScroll from 'better-scroll';
    import { Indicator } from 'mint-ui';
    import {addGoodsToCart} from './../../api/index'
    import SelectLogin from './../Login/SelectLogin.vue'


    export default {
      name: "Recommend",
      data(){
        return {
          page:1,
          count:20
        }
      },
      mounted() {
        Indicator.open("加载中...");
        this.$store.dispatch('reqRecommendShopList',{
          page:this.page, count:this.count,callback:()=>{
            Indicator.close();
          }
        })
      },
      computed: {
        ...mapState(['recommendshoplist','userInfo'])
      },
      components: {
        ShopList,
        SelectLogin
      },
      watch: {
        recommendshoplist(){

          this.$nextTick(()=>{
            //让当前页码加一
            this.page +=1;
            //初始化
            this._initBScroll();
          })
        }
      },
      methods:{
        _initBScroll(){
          //1.1初始化
          this.listScroll = new BScroll('.recommend-container',{
            scrollY : true,
            probeType : 3
          });

          //1.2监听列表的滚动
          this.listScroll.on('touchEnd',(pos)=>{
            //监听下拉
            if(pos.y >=50){

            }
            // 监听上拉
            if(this.listScroll.maxScrollY >= pos.y + 20){
              Indicator.open("加载中...");
              this.$store.dispatch('reqRecommendShopList',{
                page:this.page, count:this.count,callback:()=>{
                  Indicator.close();
                }
              });
            }
          });

          //1.3列表滚动结束
          this.listScroll.on('scrollEnd',()=>{
            this.listScroll.refresh();
          });
        },
        //监听商品点击
        async dealWithCellBtnClick(goods){
          //1.发送请求
          // user_id,goods_id,goods_name,thumb_url,price
          let result = await addGoodsToCart(this.userInfo.id,goods.goods_id,goods.goods_name,goods.thumb_url,goods.price);

          console.log(result);
        }

      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background: #f5f5f5
    width: 100%
    height: 100%
    overflow: hidden
    .recommend
      width: 100%
      display: flex
      flex-direction:row
      flex-wrap: wrap
      background-color: #f5f5f5
      padding-bottom: 50px

</style>
