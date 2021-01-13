<template>
  <div class="home">
    <nav-bar class="h-bg" bgColor="#ff5777">
      <template v-slot:center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <home-recommend :list="recommend"></home-recommend>
    <tabs :titles="['流行', '新款', '精选']" class="tab-fix"></tabs>
    <home-recommend :list="recommend"></home-recommend>
    <home-recommend :list="recommend"></home-recommend>
    <home-recommend :list="recommend"></home-recommend>
    <home-recommend :list="recommend"></home-recommend>
    <home-recommend :list="recommend"></home-recommend>
    <home-recommend :list="recommend"></home-recommend>
    <home-recommend :list="recommend"></home-recommend>
  </div>
</template>

<script>
// 引入home.js返回的数据方法
import { getHomeData, dataDemo } from 'network/home'
// 引入组件
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import Tabs from 'components/content/tabs/Tabs'

import HomeRecommend from './childComp/homeRecommend'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': { page: 0, lsit: [] },
        'new': { page: 0, lsit: [] },
        'hot': { page: 0, lsit: [] },
      }
    }
  },
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    Tabs,
  },
  created() {
    // getHomeData().then(res => {
    //   console.log('远程接口的数据:')
    //   console.log(res)
    // })
    dataDemo().then(res => {
      console.log(res.data.data)
      this.banners = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    })
  }
}

</script>

<style lang='less' scoped>
.home {
  .h-bg {
    background-color: @color;
    color: #fff;
  }
  .left {
    color: #fff;
  }
  .tab-fix {
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
}
</style>
