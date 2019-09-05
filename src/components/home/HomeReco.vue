<template>
  <div class="home-reco">
    <div class="reco-title">饕餮美食</div>
    <div class="item border-bottom" v-for="item in recoList" :key="item.id">
      <img class="item-img" :src="item.url" alt>
      <div class="info">
        <p class="info-title">{{item.title}}</p>
        <p class="info-desc">{{item.desc}}</p>
        <button class="info-btn" @click="onDetail(item.id)">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
import { recoList } from "@/assets/js/data";
export default {
  name: "HomeReco",
  data() {
    return {
      recoList: []
    };
  },
  methods: {
    onDetail(para) {
      this.$router.push(`/detail/${para}`);
    }
  },
  mounted() {
    this.recoList = recoList;
  }
};
</script>
<style scoped>
.home-reco {
  margin-top: 0.2rem;
}
.reco-title {
  background: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}
.item {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.1rem;
}
.item .item-img {
  width: 1.4rem;
  height: 1.4rem;
}
.item .info {
  flex: 1;
  margin-left: 0.2rem;
}
.item .info-title {
  line-height: 0.6rem;
  font-size: 0.32rem;
}
.item .info-desc {
  line-height: 0.4rem;
  color: #aaa;
}
.item .info-btn {
  margin-top: 0.16rem;
  padding: 0 0.2rem;
  line-height: 0.4rem;
  background: #ff9300;
  color: #fdfdfd;
  border-radius: 0.1rem;
  font-size: 0.24rem;
}
</style>


