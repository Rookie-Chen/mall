<template>
  <div id="detail">
    <detail-nav-bar class="nav"></detail-nav-bar>
    <scroll class="detail-con" ref="detailScroll">
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
      <detail-goods-info :detailInfo="detailInfo" @detailLoad="infoLoad(count)"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop } from 'network/detail.js'
import { debounce } from '@/common/utils'

import Swiper from 'components/common/swiper/Swiper.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import DetailNavBar from './childComp/DetailNavBar'
import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import DetailGoodsInfo from './childComp/DetailGoodsInfo.vue'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      banners: [],
      goods: {},
      shop: {},
      isLoad: false,
      detailInfo: []
    }
  },
  components: {
    DetailNavBar,
    Swiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then(res => {
        var data = res.result
        this.banners = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo.detailImage
      })
    },
    imageLoad(e) {
      if (!this.isLoad) {
        this.$refs.detailScroll.refresh();
        if (typeof (e) != 'undefined' && e.target.height > 0) {
          this.isLoad = true
        }
      }
    },
    infoLoad(count){
      console.log(count)
      //this.$refs.detailScroll.refresh()
    }
  },
  created() {
    this.iid = this.$route.params.id
    this.getDetail();
    this.infoLoad();
  },
  mounted() {
    this.imageLoad();
  }
}
</script>

<style scoped lang="less">
#detail {
  height: 100vh;
}
.nav {
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.detail-con {
  width: 100%;
  height: calc(100% - 44px);
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