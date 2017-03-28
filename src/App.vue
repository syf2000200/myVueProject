<template>
  <div id="app">
    <Headers></Headers>
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
    <div class="botLink">
      <router-link to="/home"><span>{{ home }}</span></router-link>
      <router-link to="/investment"><span>{{ investment }}</span></router-link>
      <router-link to="/account"><span>{{ account }}</span></router-link>
    </div>
  </div>
</template>

<script>
import Headers from './components/Header'
export default {
  name: 'app',
  data () {
    return {
      home: '首页',
      investment: '投资',
      account: '账户',
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: {
    Headers
  }
}
</script>

<style>
body {
  margin: 0;
  line-height: 1;
  font-size: 14px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
[v-cloak] {
  display: none;
}

.botLink {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  left: 0;
  padding: 8px 0;
  box-shadow: 0 1px 5px rgba(60,71,77,0.3);
  overflow: hidden;
  background-color: #FFF;
}
.botLink a {
  width: 33.33%;
  float: left;
  text-decoration: none;
  color: #A3BFCC;
}
.botLink a span {
  line-height: 1;
  padding-top: 25px;
  height: 40px;
  display: block;
  background-size: 20px !important;
}
.botLink a:nth-child(1) span {
  background: url(assets/tabbar_btn_borrowing_normal@3x.png) no-repeat center top;
}
.botLink a:nth-child(2) span {
  background: url(assets/tabbar_btn_me_normal@3x.png) no-repeat center top;
}
.botLink a:nth-child(3) span {
  background: url(assets/tabbar_btn_more_normal@3x.png) no-repeat center top;
}
.botLink a.router-link-active {
  color: #00AAFF;
}
.botLink a.router-link-active:nth-child(1) span {
  background: url(assets/tabbar_btn_borrowing_selected@3x.png) no-repeat center top;
}
.botLink a.router-link-active:nth-child(2) span {
  background: url(assets/tabbar_btn_me_selected@3x.png) no-repeat center top;
}
.botLink a.router-link-active:nth-child(3) span {
  background: url(assets/tabbar_btn_more_selected@3x.png) no-repeat center top;
}
</style>
