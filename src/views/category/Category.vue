<template>
  <div>
    <nav-bar class="cate">
      <template v-slot:left>
        <span>&lt;</span>
      </template>
      <template v-slot:center>
        <p>全部分类</p>
      </template>
    </nav-bar>
  </div>
</template>

<script>
// 建议按需引入，core只有默认滚动效果
// pullup,pulldown 等需要单独引入再使用
import BScroll from '@better-scroll/core'
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Category',
  data() {
    return {
      origin: [
        {
          name: '误工费',
          price: 100
        },
        {
          name: '测试',
          price: 200
        }
      ],
      checks: []
    }
  },
  components: {
    NavBar
  },
  mounted() {
  }
}

</script>

<style lang='less' scoped>
.cate {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  color: #333;
}
.wrapper {
  background-color: #ccc;
  height: 400px;
  overflow: hidden;
}
</style>
