<template>
  <div class="detail-slider">
    <div class="wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <div class="img-box">
            <img class="img" :src="item.url" alt>
          </div>
        </swiper-slide>
        <div class="custom-swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { weekendList } from "@/assets/js/data";
export default {
  name: "DetailSlider",
  data() {
    return {
      swiperList: [],
      swiperOption: {
        pagination: ".custom-swiper-pagination",
        paginationType: "fraction",
        autoplay: 3000,
        loop: true,
        observer: true,
        observeParents: true
      }
    };
  },
  mounted() {
    this.swiperList = weekendList;
  }
};
</script>

<style scoped>
.detail-slider {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 99;
}
.wrap {
  width: 100%;
}
.img-box {
  width: 100%;
}
.img {
  width: 375px;
  height: 3.6rem;
}
/* .wrap >>> .swiper-container {
  overflow: inherit;
}
.wrap >>> .swiper-pagination-fraction {
  bottom: -0.8rem;
} */
.custom-swiper-pagination {
  text-align: center;
  padding: 0.1rem;
}
</style>


