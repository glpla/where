<template>
  <div class="nav-bar">
    <div class="nav-btn" @click="onBack">
      <span class="iconfont iconfanhui"></span>
    </div>
    <div class="nav-title">城市选择</div>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
  methods: {
    onBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
</style>


