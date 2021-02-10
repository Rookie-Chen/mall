<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  props: {
    banners: {
      type: Array
    },
    swiperOption: {
      trye: Object,
      default: function () {
        return {
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          speed: 500,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped lang="less">
.swiper-slide {
  display: block;
  img {
    width: 100%;
    vertical-align: middle;
  }
}
</style>