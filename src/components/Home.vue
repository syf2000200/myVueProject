<template>
  <div id="home">
    <Notices></Notices>
    <div id="bannerWrap">
      <h3>选择借款金额(元)</h3>
      <Banner></Banner>
      <s></s>
      <h3>选择借款期限(天)</h3>
      <Bannerb></Bannerb>
      <s></s>
      <a href="">选择优惠券</a>
    </div>
    <div id="indexList">
      <ul>
        <li>快速审核费: {{ verify }}元</li>
        <li>利息: {{ interest }}元</li>
        <li>账户管理费: {{ cost }}元</li>
        <li>优惠金额: {{ preferential }}元</li>
      </ul>
      <span>到期应还: {{ price }}元</span>
    </div>
    <div id="indexBtn">
      <span v-on:click="goNext()">立即借款</span>
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
import Bannerb from './Banner-b'
import Notices from './Notice'

export default {
  data () {
    return {
      msg: 'login',
      verify: '117.00',
      interest: '5.00',
      cost: '58.00',
      preferential: '0.00',
      price: '1180',
      isLogin: false
    }
  },
  components: {
    Banner,
    Bannerb,
    Notices
  },
  methods: {
    goNext: function () {
      if (!this.isLogin) {
        this.$router.push({
          name: 'login',
          params: { id: 123 }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  padding-bottom: 80px;
}
#bannerWrap {
  background-color: #00AAFF;
  overflow: hidden;
}
#bannerWrap h3 {
  padding: 27px 0 6px 0;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
}
#bannerWrap>a {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  line-height: 22px;
  padding: 26px 0 12px;
  font-size: 16px;
  display: block;
}
#bannerWrap s {
  display: block;
  width: 148px;
  height: 1px;
  border-bottom: 1px dashed #fff;
  margin: 0 auto;
}
#indexList ul li{
  text-align: left;
  line-height: 28px;
  margin-bottom: 8px;
  color: #8A9194;
}
#indexList ul li:nth-child(1), #indexList ul li:nth-child(3){
  width: 40%;
}
#indexList ul li:nth-child(2), #indexList ul li:nth-child(4){
  width: 28.8%;
}
#indexList span{
  color: #3D474C;
  font-size: 18px;
  display: block;
  text-align: center;
  padding: 10px 0 16px;
  line-height: 25px;
}
#indexBtn{
  padding: 0 15px;
}
#indexBtn span{
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  display: block;
  background-color: #00AAFF;
  line-height: 44px;
  height: 44px;
  border-radius: 4px;
}
</style>
