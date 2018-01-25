<template>
  <div id="app">
    <router-view/>
    <tabbar :tabs="tabs"></tabbar>
  </div>
</template>

<script>
  import tabbar from './components/tabbar/tabbar'

  export default {
    name: 'App',
    components: {tabbar},
    data() {
      return {
        tabs: [
          {text: '首页', icon: 'home', link: '/', selected: true},
          {text: '项目', icon: 'list-ul', link: '/Project'},
          {text: '地图', icon: 'map-marker', link: '/Map'},
          {text: '关于', icon: 'info-circle', link: '/About'},
          {text: '我的', icon: 'user', link: '/User'}
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //text-align: center;
    //color: #2c3e50;
    margin-top: 0px;
    padding-bottom: 55px;
  }
</style>
