<template>
  <mu-appbar title="现金贷">
    <mu-icon-button icon="arrow_back" slot="left" v-on:click="goBack()"/>
    <mu-badge content="12" circle secondary slot="right">
      <mu-icon-button icon="notifications"/>
    </mu-badge>
  </mu-appbar>
</template>

<script>
  export default {
    data () {
      return {
        msg: '现金贷'
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .mu-badge-circle{
    width: 16px;
    height: 16px;
  }
  .mu-badge-float{
    top: 4px;
    right: 4px;
  }
</style>