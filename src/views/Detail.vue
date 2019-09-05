<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner @click.native="onShow"></detail-banner>
    <fade>
      <detail-slider v-show="isShow" @click.native="onShow"></detail-slider>
    </fade>
    <detail-list :list="detailList"></detail-list>
  </div>
</template>

<script>
/* eslint-disable */
import { detailList } from "@/assets/js/data";
import DetailHeader from "@/components/detail/DetailHeader";
import DetailBanner from "@/components/detail/DetailBanner";
import DetailSlider from "@/components/detail/DetailSlider";
import DetailList from "@/components/detail/DetailList";
import Fade from "@/components/common/Fade";
export default {
  name: "Detail",
  data() {
    return {
      isShow: false,
      detailList: []
    };
  },
  methods: {
    onShow() {
      this.isShow = !this.isShow;
    }
  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailSlider,
    DetailList,
    Fade
  },
  mounted() {
    this.detailList = detailList;
  },
  destroyed() {}
};
</script>

<style scoped>
</style>
