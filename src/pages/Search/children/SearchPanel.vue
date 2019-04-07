<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" alt="" width="20">
        <input ref="mySearch" type="search" placeholder="纸巾">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" alt="" width="25">
        <span>热门搜索</span>
      </div>
      <ul class="items">
        <li>抽纸批发</li>
        <li>浴巾可穿</li>
        <li>石榴水果</li>
        <li>富豪卷纸</li>
        <li>冰箱收纳盒</li>
        <li>连衣夏裙</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchPanel",
        props:{
          isShowSearchPanel:Function
        },
        mounted(){
          this.$refs.mySearch.focus();
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .search-panel
    width: 100%
    height: 100%
    background-color: #fff
    position: fixed;
    left: 0
    top: 0
    z-index 1000
    .search-nav
      width: 100%
      height: 60px
      border-bottom-1px(#ddd)
      padding:0 20px
      display: flex
      flex-direction: row
      justify-content:space-between
      align-items:center
      .search-input
        display: flex
        flex-direction:row
        align-items:center
        width: 85%
        height: 38px
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
        background-color: #ededed
        padding:0 10px
        input
          width: 90%
          height:90%
          padding-left:10px
          font-size:16px
          background: transparent
          outline: none
      button
        background: transparent
        font-size: 16px
        color: #aaa
    .search-content
      padding: 20px 15px
      .title
        color: #aaa
        display: flex
        flex-display: row
        align-items: center
        margin-bottom: 15px
        span
          padding 0 6px
          font-size 16px
      .items
        display: flex
        flex-wrap: wrap
        li
          font-size 16px
          color #aaa
          padding:10px 10px
          -webkit-border-radius: 15px
          -moz-border-radius: 15px
          border-radius: 15px
          background-color: #ededed
          margin-bottom:15px;
        li+li
          margin-left:10px

</style>
