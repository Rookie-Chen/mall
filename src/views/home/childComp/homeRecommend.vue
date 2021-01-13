<template>
  <div class="rec">
    <ul class="list">
      <li class="item" v-for="item in list" :key="item.link">
        <a :href="item.link" class="link">
          <img :src="item.image" alt="" />
          <p class="txt">{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.rec {
  width: 100%;
  border-bottom: 10px solid #eee;
  .list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
  }
  .item {
    flex: 1;
    padding: 0 5px;
    text-align: center;
    .link {
      display: block;
      img {
        width: 100%;
      }
    }
    .txt {
      font-size: 14px;
      margin-top: 5px;
      color: #333;
    }
  }
}
</style>