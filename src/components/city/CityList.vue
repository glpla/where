<template>
  <div class="city-list" ref="city">
    <div class="cont">
      <div class="seg">
        <div class="seg-title border-bottom">当前城市</div>
        <div class="seg-list">
          <div class="seg-item">{{this.city}}</div>
        </div>
      </div>
      <div class="seg border-bottom">
        <div class="seg-title border-bottom">热门城市</div>
        <div class="seg-list">
          <div
            class="seg-item"
            v-for="item in hots"
            :key="item.id"
            @click="onSelectCity(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="seg">
        <div class="city-wrap" v-for="(item,key) of cities" :key="key">
          <div class="city-key" :ref="key">{{key}}</div>
          <div
            class="city-name"
            v-for="city in item"
            :key="city.id"
            :data-city="city.name"
            @click="onSelectCity(city.name)"
          >{{city.name}} - {{city.spell}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "CityList",
  props: {
    cities: {},
    hots: {},
    cur: ""
  },
  data() {
    return {
      curCity: "桂林"
    };
  },
  watch: {
    cur() {
      const cur = this.$refs[this.cur];
      this.bs.scrollToElement(cur[0]);
    }
  },
  mounted() {
    this.bs = new BScroll(this.$refs.city, {
      click: true,
      mouseWheel: true
    });
  },
  methods: {
    onSelectCity(para) {
      // window.console.log(para);
      // this.bs.scrollTo(0, 0);
      // this.$emit("selectCity", para);
      this.changeCity(para);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style scoped>
.city-list {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 1.8rem;
  overflow: hidden;
  /* background: #f04; */
}
.seg-title {
  padding: 0.1rem;
}
.seg-list {
  display: flex;
  flex-wrap: wrap;
}
.seg-item {
  width: 30%;
  border-radius: 0.1rem;
  border: 1px solid #ddd;
  text-align: center;
  margin: 0.1rem;
  color: #aaa;
  padding: 0.1rem;
}
.city-key {
  padding: 0.2rem 0.1rem;
  background: #ddd;
}
.city-name {
  padding: 0.2rem 0.1rem;
  color: #aaa;
}
</style>


