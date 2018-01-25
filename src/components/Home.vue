<template>
  <div>
    <img src="static/images/首页/banner.png" alt="" width="100%" style="background-color: #289adb">
    <div>
      <div class="weui-flex">
        <div v-for="i in 4" class="weui-flex__item">
          <img class="icon" :src="'static/images/首页/'+i+'.png'" width="100%">
          <p class="weui-grid__label">讲规矩</p>
        </div>
      </div>
    </div>

    <div class="weui-panel">
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd annouce">
            <div class="label">政策公告</div>
          </div>
          <div class="weui-media-box__bd">
            <a href="#"><h4 class="weui-media-box__title" style="color: black">
              标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一</h4></a>
            <a href="#"><h4 class="weui-media-box__title" style="color: black">标题标题标题标题</h4></a>
          </div>
        </div>
      </div>
    </div>

    <div class="divide-bar"></div>
    <div>
      <div class="stick-bar">项目公示榜单
        <div><a href="#">查看全部</a></div>
      </div>
      <div style="padding-left: 5px">
        <div class="weui-panel">
          <div class="weui-panel__bd">
            <div class="weui-media-box" v-for="(p,i) in projectShow" :key="i">
              <div class="weui-media-box__bd">
                <a :href="'#'+p.src"><h4 class="weui-media-box__title" style="color: black">{{p.title}}</h4></a>
                <p class="weui-media-box__desc"><i class="fa fa-clock-o"> {{p.desc}}</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divide-bar"></div>
    <div>
      <div class="stick-bar">项目关注榜单
        <div><a href="#">查看全部</a></div>
      </div>
      <div style="padding-left: 20px; padding-right: 5px">
        <div style="display: flex;flex-wrap:wrap">
          <div v-for="i in 3" style="width: 48%;margin-right: 5px;max-width: 190px">
            <img width="100%" height="100px"
                 src="http://wss.nszhms.com/wss/userfiles/1/_thumbs/images/cms/article/2017/11/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171117182922.jpg">
            <div>
              <div class="weui-media-box__title">志愿者服务平台管理民生微实事项目</div>
              <div style="color: orangered">
                <i class="fa fa-thumbs-up"> 999+</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divide-bar"></div>
    <div>
      <div class="stick-bar">项目菜单库
        <div><a href="#">查看全部</a></div>
      </div>
      <div style="padding-left: 5px">
        <div class="weui-panel">
          <div class="weui-panel__bd">
            <div class="weui-media-box" v-for="(p,i) in projectMenu" :key="i">
              <div class="weui-media-box__bd">
                <a :href="'#'+p.src"><h4 class="weui-media-box__title" style="color: black">{{p.title}}</h4></a>
                <p class="weui-media-box__desc">{{p.desc}}</p>
                <ul class="weui-media-box__info">
                  <li class="weui-media-box__info__meta">
                    <div class="type-btn"
                         :class="{'type-btn-city': p.meta.source==='市级','type-btn-district': p.meta.source==='区级','type-btn-street': p.meta.source==='街道'}">{{p.meta.source}}</div></li>
                  <li class="weui-media-box__info__meta"><div style="line-height:24px;">更新时间 {{p.meta.date}}</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
    -->
  </div>
</template>
<script>

  export default {
    components: {},
    name: 'Home',
    data: function () {
      return {
        projectShow: [{
          src: '/Project?type=show&id=123',
          title: '标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二',
          desc: '2017-12-52',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '<div class="type-btn type-btn-city">市级</div>',
            date: '<div style="line-height:24px;">更新时间 2017-12-52</div>'
          }
        }
        ],
        hotProject: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '市级',
            date: '<div style="line-height:24px;">更新时间 2017-12-52</div>'
          }
        }

        ],
        projectMenu: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '市级',
            date: '2017-12-52'
          }
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '区级',
            date: '2017-12-52'
          }
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '街道',
            date: '2017-12-52'
          }
        }]
      }
    }
  }
</script>
<style scoped>
  .annouce {
    line-height: 32px;
    position: relative;
    padding: 0px 15px 0px 10px;
  }

  .annouce .label {
    width: 2em;
    font-size: 28px;
    font-weight: bolder;
    position: relative;
    color: rgb(255, 98, 83);
  }

  .annouce .content {
    padding-left: 25px;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
  //display: -webkit-box; //-webkit-line-clamp: 1; //-webkit-box-orient: vertical; white-space: nowrap; word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
  }

  .annouce .label:after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -15px;
    width: 1px;
    border-left: 1px solid #D9D9D9;
    color: #D9D9D9;
  }

  .divide-bar {
    background-color: #F4F4F4;
    height: 10px;
    width: 100%;
  }

  .stick-bar {
    border-left: 5px solid rgb(23, 153, 221);
    line-height: 40px;
    padding-left: 15px;
    margin-top: 15px;
    color: rgb(23, 153, 221);
  }

  .stick-bar > div {
    float: right;
    width: 4em;
    padding-right: 15px;
  }

  .stick-bar > div > a {
    color: rgb(23, 153, 221);
  }
</style>
<style>
  .type-btn {
    padding: 5px 10px;
    border-radius: 3px;
    color: white;
  }

  .type-btn-city {
    background: -webkit-linear-gradient(left, rgb(25, 157, 223), rgb(50, 201, 240)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgb(25, 157, 223), rgb(50, 201, 240)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgb(25, 157, 223), rgb(50, 201, 240)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgb(25, 157, 223), rgb(50, 201, 240)); /* 标准的语法 */
  }

  .type-btn-district {
    background: -webkit-linear-gradient(left, rgb(236, 114, 90), rgb(255, 143, 121)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgb(236, 114, 90), rgb(255, 143, 121)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgb(236, 114, 90), rgb(255, 143, 121)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgb(236, 114, 90), rgb(255, 143, 121)); /* 标准的语法 */
  }

  .type-btn-street {
    background: -webkit-linear-gradient(left, rgb(0, 128, 64), rgb(0, 217, 108)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgb(0, 128, 64), rgb(0, 217, 108)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgb(0, 128, 64), rgb(0, 217, 108)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgb(0, 128, 64), rgb(0, 217, 108)); /* 标准的语法 */
  }

  .weui-grids .weui-grid {
    padding: 0 0;
  }

  .weui-grids .weui-grid__icon {
    width: 80%;
    height: 80%;
  }

  div .weui-grids:before {
    border-top-width: 0;
    height: 0;
  }

  div .weui-grid:before {
    border-right-width: 0;
    width: 0;
  }

  div .weui-grid:after {
    border-bottom-width: 0;
    height: 0;
  }
</style>
