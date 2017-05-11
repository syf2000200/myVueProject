<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item to="/home" value="home" title="首页" icon="home"/>
      <mu-bottom-nav-item to="/account" value="music" title="我的" icon="account_box"/>
      <mu-bottom-nav-item to="/more" value="books" title="更多" icon="more_horiz"/>
    </mu-bottom-nav>
  </mu-paper>

</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
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
  .mu-paper{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>