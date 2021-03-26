<template>
  <div>
    <nav-bar>
      <template v-slot:left >
        <p class="back">&lt;</p>
      </template>
      <template v-slot:center>
        <div class="d-nav">
          <p
            class="item"
            v-for="(item, index) in titles"
            :class="{ active: curIndex === index }"
            @click="itemClick(index)"
            :key="item + index"
          >
            {{ item }}
          </p>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      curIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.curIndex = index,
      this.$emit('navTab',this.curIndex)
    }
  }
}
</script>

<style scoped lang="less">
.back {
  width: 100%;
  height: 100%;
  color: #666;
  font-family: "宋体";
  font-size: 16px;
}
.d-nav {
  display: flex;
  .item {
    flex: 1;
    font-size: 14px;
    &.active {
      color: @color;
    }
  }
}
</style>