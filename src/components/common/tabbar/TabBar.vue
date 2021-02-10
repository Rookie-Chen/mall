<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {}
  }
}
</script>

<style lang='less' scoped>
#tabbar {
  background-color: #f5f5f5;
  display: flex;
  height: 49px;
  padding: 3px 0;
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
}
</style>
