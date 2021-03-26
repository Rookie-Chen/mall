<template>
  <div class="home">
    <nav-bar class="h-bg" bgColor="#ff5777">
      <template v-slot:center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <tabs
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabs1"
      v-show="isFix"
      class="tab-fix"
    ></tabs>
    <scroll
      class="con"
      ref="scroll"
      :probe-type="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <swiper :banners="banners">
        <div
          class="swiper-slide"
          v-for="(item, index) in banners"
          :key="item + index"
        >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="loadIamge" />
          </a>
        </div>
      </swiper>
      <home-recommend :list="recommend"></home-recommend>
      <tabs
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabs2"
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

import { debounce } from '@/common/utils'
import { itemListenerMixin,goTopMixin } from 'common/mixin'

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
      tabOffsetTop: 0,
      isFix: false,
      saveY: 0, // 保存位置
    }
  },
  mixins: [itemListenerMixin,goTopMixin],
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    Tabs,
    goodsList,
    Scroll
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
      // 点击时同时給2个tab赋值当前选中
      this.$refs.tabs1.count = this.$refs.tabs2.count = index;
    },
  
    scroll(position) {
      // 滚动事件：1.根据滚动位置判断返回顶部是否显示
      this.backBol = (-position.y) > 1000
      // 2.判断是否吸顶
      this.isFix = (-position.y) > this.tabOffsetTop
    },
    loadMore() { // 上拉加载
      this.getHomeGoods(this.curItem);
    },
    loadIamge() { // 轮播图加载完成
      // 获取tabs的offsetTop
      // 直接$ref.tabs只能拿到组件，加上$el才是元素对象
      this.tabOffsetTop = this.$refs.tabs2.$el.offsetTop
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
  },
  // 除了使用keep-alive,还需处理切换页面保存位置的bug
  activated() { // 进入时触发
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 离开时触发
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off('itemImgLoad')
    console.log('离开首页')
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
    position: fixed;
    top: 44px;
    background-color: #fff;
    z-index: 5;
  }
  .con {
    height: calc(100% - 93px);
    overflow: hidden;
    position: relative;
  }
}
</style>
