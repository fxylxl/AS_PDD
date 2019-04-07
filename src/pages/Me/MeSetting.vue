<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="itlike-2" left-title="免密码支付"/>
      <me-common-cell left-icon="itlike-3" left-title="免拼单设置"/>
      <me-common-cell left-icon="itlike-1" left-title="消息接收设置" right-title="接收" rightTitleColor="red"/>

    </div>
    <div style="margin-top: 10px;">
      <me-common-cell left-icon="itlike-4" left-title="免密码支付" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-5" left-title="免拼单设置"/>
    </div>
    <div style="margin-top: 10px;">
      <me-common-cell left-icon="itlike-2" left-title="免密码支付"/>

    </div>

    <div class="logout" @click="dealLogOut">退出登录</div>

  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell.vue'
  import { Toast,MessageBox } from 'mint-ui'
  import {mapActions} from 'vuex'
  export default {
    name: "MeSetting",
    components: {
      MeCommonCell
    },
    methods:{
      ...mapActions(["logOut"]),

      dealCellClick(props){
        Toast('点击了' + props);
      },
      dealLogOut(){
        MessageBox.confirm('您确定退出登录码？').then(action=>{
          if('confirm' === action){
            //退出登录
            this.logOut({});
            //回到主界面
            this.$router.replace('/home');
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .logout
    width: 100%
    height: 44px
    margin-top: 10px
    background-color: #fff
    display: flex
    justify-content: center
    text-align: center
    align-items: center
</style>
