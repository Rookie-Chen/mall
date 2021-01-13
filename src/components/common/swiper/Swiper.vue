<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <a
        :href="item.link"
        class="swiper-slide"
        :key="item.link"
        v-for="item in banners"
      >
        <img :src="item.image" />
        <slot></slot>
      </a>
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