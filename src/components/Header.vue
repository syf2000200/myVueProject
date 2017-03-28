<template>
  <header>
    <router-link :to="{ name: 'strategy', params: { id: 123 }}">借款攻略</router-link>
    <span>{{ msg }}</span>
    <s></s>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        msg: '现金贷'
      }
    }
  }
</script>

<style scoped>
  header{
    height: 44px;
    line-height: 44px;
    background-color: #00AAFF;
    text-align: center;
    padding: 0 15px;
    position: relative;
  }
  header span{
    font-size: 18px;
    color: #FFF;
  }
  header a{
    font-size: 16px;
    color: #FFF;
    text-decoration: none;
    position: absolute;
    left: 15px;
  }
  header s{
    width: 26px;
    height: 22px;
    margin: 13px 0 0 0;
    position: absolute;
    right: 15px;
    background: url(./../assets/nav_btn_notice@3x.png) no-repeat center;
    background-size: 20px;
  }
</style>