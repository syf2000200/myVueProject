<template>
  <swiper :options="swiperOption" class="swiper-box">
    <!-- 幻灯内容 -->
    <swiper-slide class="swiper-item" v-for="item in items"><span>{{ item.message }}</span></swiper-slide>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        slidesPerView: 3,
        centeredSlides: true
      },
      items: [
        { message: '30' },
        { message: '90' },
        { message: '180' },
        { message: '365' }
      ]
    }
  }
}
</script>

<style scoped>
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