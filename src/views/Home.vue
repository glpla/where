<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <home-reco></home-reco>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/HomeHeader";
import HomeSwiper from "@/components/home/HomeSwiper";
import HomeNav from "@/components/home/HomeNav";
import HomeReco from "@/components/home/HomeReco";
import HomeWeekend from "@/components/home/HomeWeekend";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeReco,
    HomeWeekend
  }
};
</script>
