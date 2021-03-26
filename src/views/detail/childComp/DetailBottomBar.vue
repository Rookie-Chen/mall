<template>
  <div class="bot-bar">
    <p class="item kf">客服</p>
    <p class="item store">店铺</p>
    <p class="item col">收藏</p>
    <p class="item cart" @click="addCart">加入购物车</p>
    <p class="item buy" @click="buy">购买</p>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    addCart() {
      this.$emit('addCart')
    },
    buy() {
      this.$emit('buy')
    }
  },
  created() {
  }
}
</script>

<style scoped lang="less">
.bot-bar {
  height: 49px;
  line-height: 49px;
  background-color: #eee;
  border-top: 1px solid #ccc;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  .item {
    flex: 1;
    text-align: center;
    &.cart {
      background-color: red;
      color: #fff;
      flex: 2;
    }
    &.buy {
      background-color: rgb(95, 95, 72);
      color: #fff;
    }
  }
}
</style>