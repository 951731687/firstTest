<template>
  <a :href="'#'+tab.link" class="weui-tabbar__item"
     v-bind:class="{'weui-bar__item_on': isActive}"
     v-on:click="clickItem()">
    <div class="weui-tabbar__icon">
      <img v-if="tab.img" src="tab.img" alt="">
      <i v-else-if="tab.icon" :class="'fa fa-' + tab.icon"></i>
      <i v-else class="fa fa-frown-o"></i>
    </div>
    <p class="weui-tabbar__label">{{tab.text}}</p>
  </a>
</template>

<script>
  export default {
    name: 'tabbar-item',
    mounted() {
      if (this.tab.selected) {
        this.$parent.index = this.index
      }
    },
    props: {
      tab: {
        text: String,
        link: String,
        icon: String,
        img: String,
        selected: {
          type: Boolean,
          default: false
        }
      },
      index: Number
    },
    computed: {
      isActive() {
        return this.$parent.index == this.index
      }
    },
    methods: {
      clickItem: function () {
        this.$parent.index = this.index
      }
    }
  }
</script>
<style scope>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon .fa{
    color: dodgerblue;
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: deepskyblue;
  }
</style>
