<template>
  <mu-appbar title="现金贷" class="header">
    <mu-icon-button icon="arrow_back" slot="left" v-if="isShow" v-on:click="goBack()"/>
    <!-- <mu-icon-button icon="menu" label="undocked drawer" slot="left" v-if="!isShow" @click="toggle(true)"/> -->
    <!-- <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="首页"/>
        <mu-list-item title="我的"/>
        <mu-list-item title="更多"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer> -->
    <mu-icon-menu icon="menu" slot="left" v-if="!isShow">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
    <mu-badge v-bind:content="msgCount" circle secondary slot="right">
      <mu-icon-button icon="notifications"/>
    </mu-badge>
  </mu-appbar>
</template>

<script>
  export default {
    data () {
      return {
        msg: '现金贷',
        isShow: false,
        open: false,
        docked: true,
        msgCount: '20'
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      }
    },
    watch: {
      '$route' (to, from) {
        let toHome = to.path.indexOf('home')
        let toAccount = to.path.indexOf('account')
        let toMore = to.path.indexOf('more')

        if (toHome === 1 || toAccount === 1 || toMore === 1) {
          this.isShow = false
          // console.log(toHome, toAccount, toMore)
        }
        if (toHome === -1 && toAccount === -1 && toMore === -1) {
          this.isShow = true
        }
      }
    }
  }
</script>

<style>
  .header.mu-appbar{
    height: 46px;
  }
  .header .mu-badge-circle{
    width: 16px;
    height: 16px;
  }
  .header .mu-badge-float{
    top: 4px;
    right: 4px;
  }
</style>