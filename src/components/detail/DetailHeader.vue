<template>
  <div class="detail-header">
    <div class="nav-bar header-fixed" v-show="isShow" :style="opacityStyle">
      <div class="nav-btn" @click="onBack">
        <span class="iconfont iconfanhui"></span>
      </div>
      <div class="nav-title">详情</div>
    </div>
    <div class="abs-box" v-show="!isShow">
      <div class="abs-btn" @click="onBack">
        <span class="iconfont iconfanhui"></span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "DetailHeader",
  data() {
    return {
      isShow: false,
      opacityStyle: { opacity: 0 }
    };
  },
  methods: {
    onBack() {
      this.$router.push("/");
    },
    handScroll() {
      let dom = document.documentElement.scrollTop || document.body.scrollTop;
      // window.console.log(dom);
      if (dom >= 20) {
        this.isShow = true;
        let opacity = (dom - 20) / 20;
        // opacity = opacity > 1 ? 1 : opacity;
        // this.opacityStyle = { opacity };
        this.opacityStyle.opacity = opacity > 1 ? 1 : opacity;
      } else {
        this.isShow = false;
      }
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.addEventListener("scroll", this.handScroll);
  },
  destroyed() {
    // window.console.log("done");
    window.removeEventListener("scroll", this.handScroll);
  }
};
</script>

<style scoped>
.detail-header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.abs-box {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
}
.abs-btn {
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 50%;
  background: #099;
  color: #fff;
  text-align: center;
}
.header-fixed {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
</style>


