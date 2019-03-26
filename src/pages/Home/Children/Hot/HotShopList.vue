<template>
  <div class="shop-container" v-if="homeshoplist.length>0">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(shop,index) in homeshoplist" :key="index">
        <img :src="shop.image_url" alt="" width="100%">
        <h4 class="list-item-title">{{shop.goods_name}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{shop.normal_price/100}}</span>
          <span class="item-counter">已拼{{shop.sales_tip}}件</span>
          <span class="item-user">
            <img src="./../../imgs/shop_list/user1.jpg" alt="">
            <img src="./../../imgs/shop_list/user2.jpg" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单></button>
          </span>
        </div>
      </li >

    </ul>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "HotShopList",
        computed:{
          ...mapState(['homeshoplist'])
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container
  margin-bottom:50px
  background-color: #f5f5f5
  .shop-list
    .shop-list-item
      margin-bottom: 10px
      background-color: #fff
      display: flex
      flex-direction:column
      .list-item-title
        line-height: 22px
        width: 90%
        margin-left:3%
        height: 44px
        overflow: hidden
      .list-item-bottom
        margin 10px 0
        display: flex
        flex-direction:row
        justify-content: space-around
        align-items: center
        .item-price
          font-size: 18px
          text-align: center
          font-weight:bold
          color:red
          flex 1
        .item-counter
          flex 2
          font-size: 12px
          color: #cccccc
        .item-user
          flex 1
          display: flex
          justify-content: center
          align-items:center
          img
            width: 30px
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
          img:nth-child(2)
            margin-left:-8px
        .item-buy
          flex 2
          button
            width: 80%
            height: 34px
            color: #fff
            display flex
            border none
            align-items:center
            justify-content: center
            margin-left: 10px
            background-color: red
            -webkit-border-radius: 10px
            -moz-border-radius: 10px
            border-radius: 10px
            font-size:15px


</style>
