<template>
  <div class="header">
    <mt-header :title="msg" fixed>
      <mt-button slot="left" v-if="isShow" @click="goBack()">
        <i class="iconfont icon-fanhui"></i>
      </mt-button>
      <router-link to="/strategy" slot="left">
        <mt-button v-if="!isShow">借款攻略</mt-button>
      </router-link>
      <router-link to="/strategy" slot="right">
        <mt-button><i class="iconfont icon-xiaoxi1"></i><mt-badge type="error" size="small">{{ msgCount }}</mt-badge></mt-button>
      </router-link>
      
    </mt-header>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '现金贷',
        isShow: false,
        open: false,
        docked: true,
        msgCount: '20'
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      }
    },
    watch: {
      $route (to, from) {
        let toHome = to.path.indexOf('home')
        let toAccount = to.path.indexOf('account')
        let toMore = to.path.indexOf('more')

        if (toHome === 1 || toAccount === 1 || toMore === 1) {
          this.isShow = false
          // console.log(toHome, toAccount, toMore)
        }
        if (toHome === -1 && toAccount === -1 && toMore === -1) {
          this.isShow = true
          // console.log(toHome, toAccount, toMore)
        }
      }
    }
  }
</script>

<style>
  .header .mint-header-title{
    font-size: 18px;
  }
  .header .mint-badge.is-error{
    margin-left: 6px;
  }
</style>