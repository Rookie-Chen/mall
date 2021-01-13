<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.png" alt="" />
        </template>
        <template v-slot:item-icon-s>
          <img src="~assets/img/tabbar/home-s.png" alt="" />
        </template>
        <template v-slot:item-text>
          <p>首页</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/order.png" alt="" />
        </template>
        <template v-slot:item-icon-s>
          <img src="~assets/img/tabbar/order-s.png" alt="" />
        </template>
        <template v-slot:item-text>
          <p>分类</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/cart.png" alt="" />
        </template>
        <template v-slot:item-icon-s>
          <img src="~assets/img/tabbar/cart-s.png" alt="" />
        </template>
        <template v-slot:item-text>
          <p>购物车</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/me.png" alt="" />
        </template>
        <template v-slot:item-icon-s>
          <img src="~assets/img/tabbar/me-s.png" alt="" />
        </template>
        <template v-slot:item-text>
          <p>我的</p>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import { TabBar, TabBarItem } from 'components/common/tabbar'
export default {
  name: 'MainTabBar',
  data() {
    return {
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}

</script>

<style lang='scss' scoped>
</style>
