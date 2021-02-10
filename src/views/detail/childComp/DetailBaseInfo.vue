<template>
  <div class="detail-base" v-if="isShow">
    <p class="tit">{{ goods.title }}</p>
    <div class="price clear">
      <p class="now">{{ goods.price }}</p>
      <p class="old">{{ goods.oldPrice }}</p>
      <p class="tip">{{ goods.discount }}</p>
    </div>
    <div class="info">
      <p>{{ goods.columns[0] }}</p>
      <p>{{ goods.columns[1] }}</p>
      <p>{{ goods.services[0].name }}</p>
    </div>
    <div class="service">
      <p v-for="i in 3" :key="i">
        <img :src="goods.services[i].icon" alt="">
        <span>{{goods.services[i].name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {
        }
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
    isShow() {
      return Object.keys(this.goods).length != 0
    }
  }
}
</script>

<style scoped lang="less">
.detail-base {
  padding: 10px;
  border-bottom: 5px solid #eee;
  .tit {
    font-size: 16px;
  }
  .price {
    margin-top: 10px;
    p {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  .now {
    font-size: 20px;
    color: @color;
  }
  .old {
    font-size: 12px;
    color: #666;
    text-decoration: line-through;
  }
  .tip {
    background-color: @color;
    color: #fff;
    .border-radius(5px);
    font-size: 12px;
    padding: 2px 5px;
    vertical-align: top;
  }
  .info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .service {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 14px;
    img{
      width: 16px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 3px;
    }
    span{
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>