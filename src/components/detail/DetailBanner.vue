<template>
  <div class="detail-banner">
    <div class="detail-box">
      <img
        src="http://n.sinaimg.cn/tech/5_img/upload/26c72712/667/w880h587/20190828/cb47-icuacsa4076469.jpg"
        alt
      >
      <div class="info">
        <p class="desc">Lorem ipsum dolor sit amet.</p>
        <p class="num">
          <span class="iconfont iconimage2"></span> 8
        </p>
      </div>
    </div>
    <div class="detarl-slider"></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "DetailBanner"
};
</script>

<style scoped>
.detail-box {
  position: relative;
}
.detail-box img {
  width: 100%;
}
.detail-box .info {
  position: absolute;
  height: 0.8rem;
  line-height: 0.8rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  color: #fff;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.8)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>


