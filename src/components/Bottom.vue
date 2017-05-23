<template>
  <div class="bottom-bar">
    <mt-navbar>
      <router-link to="/home">
        <mt-tab-item>
          <i slot="icon" class="material-icons">home</i>
        </mt-tab-item>
      </router-link>
      <router-link to="/account">
        <mt-tab-item>
          <i slot="icon" class="material-icons">person</i>
        </mt-tab-item>
      </router-link>
      <router-link to="/more">
        <mt-tab-item>
          <i slot="icon" class="material-icons">more_horiz</i>
        </mt-tab-item>
      </router-link>
    </mt-navbar>
  </div>
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
  .bottom-bar .mint-navbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-flow: row;
    box-shadow: 0 -1px 6px #ebebeb;
  }
  .bottom-bar .mint-navbar>a{
    flex: 1;
    text-decoration: none;
  }
  .bottom-bar .mint-navbar>a  .material-icons{
    transition: all 0.2s linear;
  }
  .bottom-bar .mint-navbar>a.router-link-active .material-icons{
    transform: scale(1.2);
  }
  .bottom-bar .mint-navbar .mint-tab-item{
    padding-top: 8px;
  }
</style>