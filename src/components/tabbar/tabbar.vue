<template>
  <div class="weui-tabbar">
    <tabbar-item v-for="(tab,i) in tabs" :key="i" :index="i" :tab="tab"></tabbar-item>
  </div>
</template>

<script>
  import TabbarItem from './tabbar-item'

  export default {
    components: {TabbarItem},
    mounted() {
    },
    name: 'tabbar',
    props: {
      tabs: {
        type: Array
      }
    },
    data() {
      return {index: 0}
    }
  }
</script>

<style scoped>
  .weui-tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
  }
</style>
