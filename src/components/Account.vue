<template>
  <div class="account">
    <div class="flex">
      <span>李晓婷</span>
      <p>188 **** 8888</p>
    </div>
    <mt-cell title="个人资料" is-link to="/account/person">
      <i slot="icon" class="iconfont icon-xinwenzixun"></i>
    </mt-cell>
    <mt-cell title="借款记录" is-link>
      <i slot="icon" class="iconfont icon-zhangdan"></i>
    </mt-cell>
    <mt-cell title="我的银行卡" is-link>
      <i slot="icon" class="iconfont icon-jishuwendang"></i>
    </mt-cell>
    <mt-cell title="意见反馈" is-link>
      <i slot="icon" class="iconfont icon-xiaoyanjing"></i>
    </mt-cell>
    <mt-cell title="设置" is-link>
      <i slot="icon" class="iconfont icon-settings"></i>
    </mt-cell>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '我的'
      }
    }
  }
</script>

<style scoped>
  .account .mu-item-title{
  	text-align: left;
  }
  .account .flex{
  	background-color: #26a2ff;
  	color: #fff;
  	padding: 18px 0;
  }
  .account .flex span{
  	line-height: 34px;
  	display: block;
  	text-align: center;
  	font-size: 24px;
  }
  .account .flex p{
  	line-height: 20px;
  	display: block;
  	text-align: center;
  	font-size: 18px;
  	margin: 0;
  }
  .account .mint-cell-wrapper{
    text-align: left;
  }
  .account .mint-cell-text{
    color: #3D474C;
    font-size: 16px;
  }
</style>