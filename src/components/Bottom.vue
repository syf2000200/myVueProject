<template>
  <mu-paper class="bottom">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item to="/home" value="home" title="首页" icon="home"/>
      <mu-bottom-nav-item to="/account" value="music" title="我的" icon="person"/>
      <mu-bottom-nav-item to="/more" value="books" title="更多" icon="more_horiz"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '首页'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
  .bottom.mu-paper{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 900;
  }
  .bottom .mu-bottom-nav{
    height: 50px;
  }
</style>