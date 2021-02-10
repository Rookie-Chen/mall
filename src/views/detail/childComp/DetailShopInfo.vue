<template>
  <div class="shop">
    <div class="logo">
      <div class="img">
        <img :src="shop.shopLogo" alt="" />
      </div>
      <span>{{ shop.name }}</span>
    </div>
    <div class="detail">
      <div class="l-text">
        <div class="item">
          <p class="num">{{ sell }}万</p>
          <p class="txt">总销量</p>
        </div>
        <div class="item">
          <p class="num">{{ shop.cGoods }}</p>
          <p class="txt">全部宝贝</p>
        </div>
      </div>
      <div class="score">
        <div class="item" v-for="(i, index) in shop.score" :key="index">
          <span class="txt">{{ i.name }}</span>
          <span class="num" :class="{ cur: i.isBetter }">{{ i.score }}</span>
          <span class="zi" :class="{ cur: i.isBetter }">
            {{ i.isBetter ? "高" : "低" }}
          </span>
        </div>
      </div>
    </div>
    <div class="btn">
      <a :href="shop.shopUrl" class="link">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  components: {
  },
  computed: {
    sell() {
      return (this.shop.cSells / 10000).toFixed(1)
    }
  }
}
</script>

<style scoped lang="less">
.shop {
  .logo {
    padding: 20px 10px;
    .img {
      width: 50px;
      height: 50px;
      .border-radius();
      overflow: hidden;
      border: 1px solid #ccc;
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      color: #666;
    }
  }
}
.detail {
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    width: 1px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    z-index: 5;
    background-color: #ccc;
  }
  .l-text {
    width: 50%;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    .item {
      display: inline-block;
      text-align: center;
      color: #333;
      margin: 0 5px;
      .num {
        font-size: 18px;
        margin-bottom: 5px;
      }
      .txt {
        font-size: 14px;
      }
    }
  }
  .score {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    padding-left: 30px;
    .item {
      margin: 8px 0;
      font-size: 15px;
      color: #666;
    }
    .num {
      display: inline-block;
      width: 25px;
      margin: 0 15px;
      color: rgb(41, 206, 55);
      &.cur {
        color: @color;
      }
    }
    .zi {
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      background-color: rgb(41, 206, 55);
      color: #fff;
      &.cur {
        background-color: @color;
      }
    }
  }
}
.btn {
  text-align: center;
  margin: 10px auto;
    .link {
    display: inline-block;
    margin: 0 auto;
    line-height: 30px;
    .border-radius(5px);
    padding: 2px 15px;
    background-color: rgb(54, 104, 145);
    color: #fff;
  }
}
</style>