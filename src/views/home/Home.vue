<template>
  <div class="home">
    <nav-bar class="h-bg" bgColor="#ff5777">
      <template v-slot:center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <scroll
      class="con"
      ref="scroll"
      :probe-type="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <swiper :banners="banners"></swiper>
      <home-recommend :list="recommend"></home-recommend>
      <tabs
        :titles="['流行', '新款', '精选']"
        class="tab-fix"
        @tabClick="tabClick"
      ></tabs>
      <goods-list :goods="showData"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="backBol"></back-top>
  </div>
</template>

<script>
// 引入home.js返回的数据方法
import { getHomeData, getHomeGoods } from 'network/home'
// 引入公共组件
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import Tabs from 'components/content/tabs/Tabs'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/backTop.vue'
import { debounce } from '@/common/utils'

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
      backBol: false, // 是否显示返回顶部
    }
  },
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    Tabs,
    goodsList,
    Scroll,
    BackTop
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
    backClick() {
      this.$refs.scroll.backTop(0, 0, 500)
    },
    scroll(position) {
      this.backBol = (-position.y) > 1000 ? true : false
    },
    loadMore() { // 上拉加载
      this.getHomeGoods(this.curItem);
    },
    /**
     * 网络请求
     **/
    getHomeData() { // banner 和 推荐
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type) { // 首页商品列表
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
        // 结束此次上拉加载
        this.$refs.scroll.finishPullUp()
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
  },
  mounted() {
    // 监听item的图片加载情况
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('load', () => {
      refresh();
    })
  }
}

</script>

<style lang='less' scoped>
.home {
  height: 100vh;
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
  .con {
    height: calc(100% - 93px);
    overflow: hidden;
    position: relative;
  }
}
</style>
