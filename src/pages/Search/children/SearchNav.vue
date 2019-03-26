<template>
  <div class="search-nav">
    <a href="" class="search-nav-icon">
      <img src="../images/search.png" alt="" width="25">
      <span>三层纸巾</span>
    </a>
  </div>
</template>

<script>

    export default {
        name: "SearchNav"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .search-nav
    width: 100%
    height: 60px
    background-color: #fff
    border-bottom-1px(#ccc)
    position: fixed
    top: 0
    left: 0
    z-index: 998
    display: flex
    justify-content: center
    align-items:center
    .search-nav-icon
      width: 90%
      background-color: #e8e8e8
      height: 70%
      -webkit-border-radius: 10px
      -moz-border-radius: 10px
      border-radius: 10px
      display: flex
      justify-content: center
      align-items:center
      span
        color: #aaaaaa
        margin-left:6px
        font-size:18px
        font-weight:lighter
</style>
