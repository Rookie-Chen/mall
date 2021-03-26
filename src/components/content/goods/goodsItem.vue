<template>
  <div class="good-item" @click="jump">
    <div class="img">
      <img :src="imgSrc" alt="" @load="imageLoad" />
    </div>
    <p class="cn">{{ value.title }}</p>
    <div class="text clear">
      <p class="left price">{{ value.price }}</p>
      <!-- <p class="col">
        <img :src="value.ptpC" alt="">
      </p> -->
    </div>
  </div>
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
  },
  computed: {
    imgSrc() {
      return this.value.image || this.value.show.img
    }
  },
  methods: {
    imageLoad() {
      // 1.当不同页面使用此组件时需要按路由来区分刷新对应的页面
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit("homeLoad");
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit("detailLoad")
      // }

      // 2.使用混入 mixin，只发射一个事件
      this.$bus.$emit("itemImgLoad")
    },
    // 跳转到详情
    jump() {
      this.$router.push('/detail/' + this.value.iid)
    }
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
  .en {
    font-size: 12px;
    color: #333;
    height: 24px;
  }
  .text {
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