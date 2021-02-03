<template>
  <div class="icon">
    ↑
  </div>
</template>

<script>
 export default {
   name:'backTop',
   data () {
     return {
     }
   },
   components: {
   }
 }
</script>

<style scoped lang="less">
.icon{
  width:30px;
  height: 30px;
  background-color: blue;
  .border-radius();
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  font-family: '宋体';
  position: fixed;
  bottom: 60px;
  right: 10px;
  color: #fff;
  z-index: 100;
}
</style>