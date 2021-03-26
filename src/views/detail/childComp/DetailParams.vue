<template>
  <div class="detail-params" v-if="Object.keys(params).length > 0">
    <table class="size">
      <tr v-for="(item, index) in params.sizes[0]" :key="item + index">
        <td v-for="i in item" :key="i">
          {{ i }}
        </td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(item, index) in params.infos" :key="item + index + 1">
        <td class="l-txt">
          {{ item.key }}
        </td>
        <td class="r-txt">
          {{ item.value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    params: {
      type: Object,
      default() {
        return {}
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
.detail-params {
  padding: 0 10px;
  .size {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    tr {
      border-bottom: 1px solid #ccc;
    }
    td {
      width: 25%;
      text-align: center;
      line-height: 40px;
    }
  }
  .info {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #ccc;
      line-height: 40px;
    }
    .l-txt {
      color: #666;
      width: 30%;
    }
    .r-txt {
      color: @color;
    }
  }
}
</style>