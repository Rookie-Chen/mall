<template>
  <div class="rate" v-if="Object.keys(rate).length > 0">
    <div class="top clear">
      <p class="left">用户评价</p>
      <p class="right">更多</p>
    </div>
    <div class="list">
      <div class="item">
        <div class="clear">
          <div class="img">
            <img :src="rate.user.avatar" alt="" />
          </div>
          <p class="name">{{ rate.user.uname }}</p>
        </div>
        <p class="con">{{ rate.content }}</p>
        <p class="time">{{ showDate }}{{ rate.style }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  name: 'DetailRate',
  props: {
    rate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  // filters: {
  //   showDate(value) {
  //     if (!value) return ''
  //     const date = new Date(value * 1000);
  //     return formatDate(date,'yyyy-MM-dd')
  //   }
  // },
  computed: {  // vue 3.0已弃用filters ，建议使用计算属性
    showDate() {
      const date = new Date(this.rate.created * 1000)
      return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.rate{
  .top{
    line-height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
  }
  .item{
    padding: 10px;
    .img{
      width: 60px;
      height: 60px;
      .border-radius();
      float: left;
      overflow: hidden;
      margin-right: 10px;
      img{
        width: 100%;
      }
    }
    .name{
      line-height: 60px;
    }
    .con{
      color: #666;
      margin: 10px 0;
      line-height: 20px;
      font-size: 14px;
    }
    .time{
      font-size: 12px;
      color: #999;
    }
  }
}
</style>