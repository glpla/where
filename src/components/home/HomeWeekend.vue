<template>
  <div class="home-weekend">
    <div class="weekend-title">热 销 楼 盘</div>
    <div class="item border-bottom" v-for="item in weekendList" :key="item.id">
      <img class="item-img" :src="item.url" alt>
      <div class="item-title">
        <p>{{item.title}}</p>
      </div>
      <p class="item-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
import { weekendList } from "@/assets/js/data";
export default {
  name: "HomeWeekend",
  data() {
    return {
      weekendList: []
    };
  },
  mounted() {
    this.weekendList = weekendList;
  }
};
</script>
<style scoped>
.home-weekend {
  margin-top: 0.2rem;
}
.weekend-title {
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.1rem;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567697201590&di=bb4923bca6bd5af56c29312cc98d61b6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180319%2F5efe3198c8ea40d7a119319577015940.jpeg);
  background-position: left top;
  /* background-size: 100% auto; */
  background-size: cover;
  background-clip: content-box;
  text-align: center;
  font-size: 0.32rem;
  font-weight: bold;
  color: #c71585;
}
.item {
  margin-top: 0.1rem;
  padding: 0.1rem;
}
.item .item-img {
  width: 100%;
  border-radius: 0.2rem;
}
.item .item-title {
  width: 60%;
  background: rgba(255, 105, 180, 0.6);
  border-left: 8px solid rgba(199, 21, 133, 0.6);
  /* border-right: 8px solid #c71585; */
  margin: 0.1rem auto;
  transform: skewX(-15deg);
}
.item .item-title p {
  text-align: center;
  color: #fff;
  line-height: 0.6rem;
  transform: skewX(15deg);
}
.item .item-desc {
  text-indent: 0.64rem;
  line-height: 0.4rem;
  color: #aaa;
}
</style>


