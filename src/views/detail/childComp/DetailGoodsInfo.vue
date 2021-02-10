<template>
  <div class="detail-info">
    <p>{{detailInfo}}</p>
    <p class="desc">{{ typeof (detailInfo[0].desc) == 'undefined' ? '': detailInfo[0].desc}}</p>
    <p class="key">{{ detailInfo[0].key }}</p>
    <div class="list">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in detailInfo[0].list"
        :key="index"
        @load="imageLoad(count)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      count: 0,
      imgLength: 0,
      num: 5
    }
  },
  components: {
  },
  methods: {
    imageLoad(count) {
      this.$emit('detailLoad',count)
    }
  },
  watch: {
    lenFun() {
      this.imgLength = this.detailInfo.list.length
      console.log(this.imgLength)
    }
  }
}
</script>

<style scoped lang="less">
.list{
  img{
    width: 100%;
  }
}
</style>