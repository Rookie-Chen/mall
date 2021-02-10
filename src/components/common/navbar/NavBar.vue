<template>
  <div class="box">
    <div class="nav-bar" :style="{'background-color':bgColor}">
      <div class="left" @click="backClick">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    bgColor: String
  },
  data() {
    return {
    }
  },
  methods: {
     backClick() {
      this.$router.back()
    }
  }
}

</script>
<style lang='less' scoped>
.box{height: 44px;position: relative;z-index: 100;}
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .left,
  .right {
    width: 10%;
  }
  .left {
    font-family: "宋体";
  }
  .center {
    flex: 1;
  }
}
</style>
