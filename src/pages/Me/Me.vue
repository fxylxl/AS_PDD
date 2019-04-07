<template>
  <div class="me">
    <div v-if="userInfo.id ">
      <me-top></me-top>
    </div>
    <select-login v-else ></select-login>
  </div>
</template>

<script>
  import SelectLogin from './../Login/SelectLogin.vue'
  import MeTop from './MeTop.vue'
  import {mapState} from 'vuex';
  export default {
    name: "Me",
    components: {
      SelectLogin,
      MeTop
    },
    computed:{
      ...mapState(['userInfo'])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    background: #F5F5F5
    width: 100%
    height: 100%
</style>
