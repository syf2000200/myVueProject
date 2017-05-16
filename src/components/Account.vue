<template>
  <div class="account">
    <div class="flex">
      <span>李晓婷</span>
      <p>188 **** 8888</p>
    </div>
    <mu-list>
      <mu-list-item title="个人资料">
        <mu-icon slot="left" value="face"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="借款记录">
        <mu-icon slot="left" value="grade"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="我的银行卡">
        <mu-icon slot="left" value="credit_card"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="意见反馈">
        <mu-icon slot="left" value="drafts"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="设置">
        <mu-icon slot="left" value="settings"/>
      </mu-list-item>
      <mu-divider/>
    </mu-list>
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

<style>
  .account .mu-item-title{
  	text-align: left;
  }
  .account .flex{
  	background-color: #009688;
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
</style>