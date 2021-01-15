<template>
  <div class="goods clear">
    <goods-item v-for="item in goods" :key="item.petID" :value="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './goodsItem.vue'

 export default {
   name:'goodsList',
   props: {
     goods: {
       type: Array,
       default(){
         return []
       }
     }
   },
   data () {
     return {
     }
   },
   components: {
     GoodsItem
   }
 }
</script>

<style scoped lang="less">
.goods{
  padding: 0 10px;
  margin-left: -5%;
}
</style>