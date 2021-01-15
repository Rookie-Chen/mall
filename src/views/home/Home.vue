<template>
  <div class="home">
    <nav-bar class="h-bg" bgColor="#ff5777">
      <template v-slot:center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <home-recommend :list="recommend"></home-recommend>
    <tabs
      :titles="['流行', '新款', '精选']"
      class="tab-fix"
      @tabClick="tabClick"
    ></tabs>
    <goods-list :goods="showData"></goods-list>
  </div>
</template>

<script>
// 引入home.js返回的数据方法
import { getHomeData, getHomeGoods } from 'network/home'
// 引入组件
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import Tabs from 'components/content/tabs/Tabs'
import goodsList from 'components/content/goods/goodsList'

import HomeRecommend from './childComp/homeRecommend'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      curItem: 'pop',
    }
  },
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    Tabs,
    goodsList
  },
  methods: {
    /**  
     * 事件监听
    **/
    tabClick(index) {
      switch (index) {
        case 0:
          this.curItem = 'pop';
          break;
        case 1:
          this.curItem = 'new';
          break;
        case 2:
          this.curItem = 'sell';
          break;
      }
    },
    /**
     * 网络请求
     **/
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })
    }
  },
  computed: {
    showData() {
      return this.goods[this.curItem].list
    }
  },
  created() {
    // 获取banner,推荐数据
    this.getHomeData();
    // 获取商品
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
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
