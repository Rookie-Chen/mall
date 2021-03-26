import { debounce } from './utils'
//图片防抖
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 监听item的图片加载情况
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      this.refresh();
    }
    this.$bus.$on('itemImgLoad', () => {
      this.refresh();
    });
  }
}

// 返回顶部
import BackTop from 'components/content/backTop/backTop.vue'

export const goTopMixin = {
  data() {
    return {
      backBol: false, 
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.backTop(0, 0, 500)
    },
  }
}