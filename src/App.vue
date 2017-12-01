<template>
  <div id="app">
    <Headers></Headers>
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
    <Bottoms></Bottoms>
  </div>
</template>

<script>
import Headers from './components/Header'
import Bottoms from './components/Bottom'
export default {
  name: 'app',
  data () {
    return {
      home: '首页',
      account: '我的',
      more: '更多',
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
    Headers,
    Bottoms
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
  color: #26a2ff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
[v-cloak] {
  display: none;
}
.view{
  padding: 40px 0;
}
</style>
