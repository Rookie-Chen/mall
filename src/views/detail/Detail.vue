<template>
  <div id="detail">
    <detail-nav-bar class="nav" @navTab="navHandler" ref="nav"></detail-nav-bar>
    <scroll class="detail-con" ref="scroll" @scroll="scroll" :probe-type="2">
      <swiper class="detail-swiper">
        <div
          class="swiper-slide"
          v-for="(item, index) in banners"
          :key="item + index"
        >
          <img :src="item" alt="" @load="imageLoad" />
        </div>
      </swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @detailLoad="detailLoad"
      ></detail-goods-info>
      <detail-params :params="params" ref="params"></detail-params>
      <detail-rate :rate="rate" class="detail-rate" ref="rate"></detail-rate>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart" @buy="buy"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="backBol"></back-top>
  </div>
</template>


<script>
import { getDetail, Goods, Shop, Params, getRecommend } from 'network/detail.js'
import { debounce } from '@/common/utils'
import { itemListenerMixin,goTopMixin } from 'common/mixin'

import Swiper from 'components/common/swiper/Swiper.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/goodsList.vue'

import DetailNavBar from './childComp/DetailNavBar'
import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import DetailGoodsInfo from './childComp/DetailGoodsInfo.vue'
import DetailParams from './childComp/DetailParams.vue'
import DetailRate from './childComp/DetailRate.vue'
import DetailBottomBar from './childComp/DetailBottomBar.vue'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      banners: [],
      goods: {},
      shop: {},
      isLoad: false,
      detailInfo: {},
      params: {},
      rate: {},
      recommend: [],
      themeTopYs: [], // 每一个栏目的y集合
      themeTopFun: null, // 栏目加载函数
      curIndex: 0
    }
  },
  components: {
    DetailNavBar,
    Swiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailRate,
    GoodsList,
    DetailBottomBar
  },
  mixins: [itemListenerMixin,goTopMixin],
  methods: {
    // 请求详情数据
    getDetail() {
      getDetail(this.iid).then(res => {
        var data = res.result
        //1.商品banner
        this.banners = data.itemInfo.topImages
        //2.商品基本信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //3.店铺信息
        this.shop = new Shop(data.shopInfo)
        //4.商品详情
        this.detailInfo = data.detailInfo
        //5.商品参数
        this.params = new Params(data.itemParams.info, data.itemParams.rule)
        //6.评论
        this.rate = data.rate.list[0] || {}

        /* 保证DOM渲染完成后执行 ,但是图片还没加载完成，所以获取的y值还是不对*/
        // this.$nextTick(() => {
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs)
        // })

        /* 获取每个栏目的Y值防抖处理 */
        this.themeTopFun = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        }, 200)
      })
    },

    // 请求推荐数据
    getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list;
      });
    },
    imageLoad(e) {
      if (!this.isLoad) {
        this.$refs.scroll.refresh();
        if (typeof (e) != 'undefined' && e.target.height > 0) {
          this.isLoad = false
        }
      }
    },
    detailLoad() {
      // 监听详情图片加载完成时刷新
      // 1.内部处理，图片加载完成再发射事件
      //this.$refs.scroll.refresh()
      // 2.使用混入的防抖函数
      this.refresh();
      // 图片加载完获取高度
      this.themeTopFun();
    },
    // 顶部导航点击事件
    navHandler(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    // 监听滚动高度
    scroll(pos) {
      // 滚动事件：1.根据滚动位置判断返回顶部是否显示
      this.backBol = (-pos.y) > 1000
      const positionY = -pos.y
      let len = this.themeTopYs.length;
      for (let i = 0; i < len; i++) {
        if (this.curIndex !== i && (
          (i < len - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) ||
          // 1.处理边界越界问题，越界过后为undefined导致判断为false
          // 2.可以在存储Y值的数组里push一个Number.MAX_VALUE,然后循环len-1次
          (i === len - 1 && positionY >= this.themeTopYs[i])

        )) {
          this.curIndex = i;
          this.$refs.nav.curIndex = this.curIndex
        }
      }
    },
    // 加入购物车
    addCart(){
      // 获取购物车展示的数据
      const proObj = {}
      proObj.iid = this.iid
      proObj.img = this.banners[0]
      proObj.title = this.goods.title
      proObj.des = this.goods.desc
      proObj.price = this.goods.oldPrice
      this.$store.commit('addCart',proObj)
    },
    // 购买
    buy(){}
  },
  created() {
    this.iid = this.$route.params.id
    this.getDetail();
    this.getRecommend();
  },
  mounted() {
    this.imageLoad();
  },
  destroyed() {
    // this.$bus.$off('itemImgLoad', this.itemImgListener)
    this.$bus.$off('itemImgLoad')
  }
}
</script>

<style scoped lang="less">
#detail {
  height: 100vh;
  position: relative;
  z-index: 101;
  .box {
    background-color: #fff;
  }
}
.nav {
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.detail-con {
  width: 100%;
  height: calc(100% - 44px - 49px);
  position: relative;
  z-index: 5;
  background-color: #fff;
}
.detail-swiper {
  height: 300px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
</style>