<template>
  <a :href="value.clientUrl" class="good-item">
    <div class="img">
      <img :src="value.show.img" alt="" />
    </div>
    <p class="cn">{{ value.title }}</p>
    <div class="text clear">
      <p class="left price">{{ value.price }}</p>
      <p class="col">
        <img :src="value.ptpC" alt="">
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'goodsItem',
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.good-item {
  width: 45%;
  float: left;
  margin-left: 5%;
  display: block;
  line-height: 24px;
  margin-bottom: 20px;
  .cn {
    font-size: 14px;
    color: #333;
    .over-one();
    font-weight: bold;
  }
  .en{
    font-size: 12px;
    color: #333;
    height: 24px;
  }
  .text{
    color: @color;
    font-size: 14px;
    height: 24px;
  }
  img {
    width: 100%;
    height: 250px;
  }
}
</style>