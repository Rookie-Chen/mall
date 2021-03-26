<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <p class="des">{{ detailInfo.desc }}</p>
    <p class="key">{{ detailInfo.detailImage[0].key }}</p>
    <div class="list">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0,
      imgLength: 0,
    }
  },
  components: {
  },
  methods: {
    imageLoad() {
      // 避免多次发送事件
      /* if (++this.count === this.imgLength) {
        this.$emit('detailLoad')
      } */
      this.$emit('detailLoad')
    }
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped lang="less">
.detail-info {
  border-bottom: 5px solid #eee;
  .des,
  .key {
    padding: 10px;
    color: #666;
    font-size: 14px;
  }
  .list {
    img {
      width: 100%;
    }
  }
}
</style>