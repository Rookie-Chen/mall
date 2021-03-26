<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core' // 核心滚动
// 上拉加载，下拉刷新需要按需引入
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0 // 根据传入的值判断是否需要实时监听
    },
    pullUpLoad: { // 上拉是否加载
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  components: {
  },
  mounted() {
    // 1.创建BScroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // 不设置会导致里面的内容可能不能点击
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    }
    // 3.监听上拉加载
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    backTop(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() { // 结束上拉加载，准备好下一次上拉加载
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      /* console.log(1111) */
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    },
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped lang="less">
</style>