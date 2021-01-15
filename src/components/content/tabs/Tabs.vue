<template>
  <div class="titles">
    <div
      class="item"
      v-for="(i, index) in titles"
      :key="index"
      :class="{ cur: index === count }"
      @click="itemClick(index)"
    >
      <span class="txt">{{ i }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
  components: {
  },
  methods: {
    itemClick(index){
      this.count = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped lang="less">
.titles {
  width: 100%;
  display: flex;
  padding: 10px 0;
  .item {
    display: block;
    flex: 1;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    position: relative;
    .txt{
      padding: 0 3px 5px;
    }
    &.cur {
      .txt {
        color: @color;
        border-bottom: 2px solid @color;
      }
    }
  }
}
</style>