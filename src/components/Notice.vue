<template>
  <div id="notice">
  	<div v-if="isNotice" class="notice"><p>{{ msg }}</p></div>
  	<div v-else-if="isUnConnect" class="error"><p>{{ msg2 }}</p></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '尊敬的各位用户您好！由于银行系统原因借款会延时到账，请见谅！',
        msg2: '当前网络不佳，请检查网络设置！',
        isNotice: true,
        isUnConnect: false,
        apiUrl: ''
      }
    }
    // ,
    // created () {
    //   this.$http.get(this.apiUrl)
    //   .then(function (res) {
    //     console.log(res)
    //   })
    // }
  }
</script>

<style scoped>
  p {
  	margin: 0;
  	color: #fff;
  }
  #notice>div {
  	height: 35px;
  	line-height: 35px;
  	overflow-x: scroll;
  	overflow-y: hidden;
  	padding: 0 15px;
  }
  .notice{
  	background-color: #FFA64C;
  }
  .error{
  	background-color: #FF644C;
  }
</style>