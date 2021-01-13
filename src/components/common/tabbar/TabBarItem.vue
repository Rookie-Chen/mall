<template>
  <div class="tab-item" @click="itemClick">
    <!-- 最好是在插槽外面加个div，因为插槽会被内容替换，外面的div增加属性 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-s"></slot></div>
    <div :style="curStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    curColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    curStyle() {
      return this.isActive ? { color: this.curColor } : {}
    }
  },
  methods: {
    itemClick(e) {
      this.$router.push(this.path)
    }
  }
}

</script>

<style lang='less' scoped>
.tab-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  line-height: 1;
  img {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto 3px;
  }
}
</style>
