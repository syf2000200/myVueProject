<template>
  <div id="home">
    <Notices></Notices>
    <div id="bannerWrap">
      <h3>选择借款金额(元)</h3>
      <swiper :options="swiperOption" class="swiper-box">
        <!-- 幻灯内容 -->
        <swiper-slide class="swiper-item" v-for="item in items"><span>{{ item.message }}</span></swiper-slide>
      </swiper>
      <s></s>
      <h3>选择借款期限(天)</h3>
      <swiper :options="swiperOption" class="swiper-box">
        <!-- 幻灯内容 -->
        <swiper-slide class="swiper-item" v-for="itemb in itemsb"><span>{{ itemb.message }}</span></swiper-slide>
      </swiper>
      <s></s>
      <router-link to="/strategy">选择优惠券</router-link>
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
      <!-- <mu-raised-button label="立即借款" primary fullWidth v-on:click="goNext()"/> -->
      <mt-button size="large" type="primary" @click="goNext()">立即借款</mt-button>
    </div>

  </div>
</template>

<script>
import Notices from './Notice'

export default {
  data () {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        slidesPerView: 3,
        centeredSlides: true
      },
      items: [
        { message: '3000' },
        { message: '6000' },
        { message: '9000' }
      ],
      itemsb: [
        { message: '15' },
        { message: '30' },
        { message: '60' }
      ],
      msg: 'login',
      verify: '117.00',
      interest: '5.00',
      cost: '58.00',
      preferential: '0.00',
      price: '1180',
      isLogin: true
    }
  },
  components: {
    Notices
  },
  methods: {
    goNext: function () {
      if (!this.isLogin) {
        this.$router.push({
          name: 'login'
        })
      }
      if (this.isLogin) {
        this.$router.push({
          name: 'investment'
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
  background-color: #26a2ff;
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
  margin: 0 2%;
}
#indexList ul li:nth-child(1), #indexList ul li:nth-child(3){
  width: 43%;
}
#indexList ul li:nth-child(2), #indexList ul li:nth-child(4){
  width: 33.8%;
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
.swiper-box {
  width: 100%;
  height: 100%;
  margin: 0 auto 10px;
}
.swiper-item {
  height: 100%;
  text-align: center;
  font-size: 24px;
  color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  line-height: 58px;
  transition: all 0.3s linear;
}
.swiper-item span {
  padding: 0 10px;
}
.swiper-slide-active{
  font-size: 48px;
}
</style>
