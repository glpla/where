<template>
  <div class="nav-bar">
    <div class="nav-btn">
      <span class="iconfont iconfanhui"></span>
    </div>
    <div class="nav-title input">
      <!-- <span class="iconfont iconsousuo1"></span> -->
      <input type="text" placeholder="请输入您要查找的信息">
    </div>
    <div class="nav-btn txt-abr" @click="onCity">
      <span class="iconfont iconliebiaoyedizhi"></span>
      {{city}}
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from "vuex";
export default {
  name: "home-Header",
  methods: {
    onCity() {
      this.$router.push("/city");
    }
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>
<style scoped>
.input input {
  width: 100%;
  border-radius: 0.08rem;
  padding: 0.04rem;
  background: #fff;
  color: #333;
  text-align: center;
}
</style>


