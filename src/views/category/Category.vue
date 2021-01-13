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
    分类
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
name: 'Category',
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}

</script>

<style lang='less' scoped>
.cate{
  background-color: #fff;
  border-bottom: 1px solid #eee;
  color: #333;
}
</style>
