<template>
  <div class="detail-list" ref="detail-list">
    <div>
      <div class="box" v-for="item in list" :key="item.id">
        <div class="item border-bottom">
          <span class="iconfont iconxiangyou"></span>
          {{item.title}}-{{item.id}}
        </div>
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BScroll from "better-scroll";

export default {
  name: "DetailList",
  props: {
    list: Array
  },
  mounted() {
    // this.bs = new BScroll(this.$refs["detail-list"], {
    //   click: true,
    //   mouseWheel: true
    // });
  }
};
</script>

<style scoped>
.detail-list {
  padding: 0.1rem;
  /* height: 4rem;
  overflow: hidden; */
}
.box {
  background: #eee;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
}
.item {
  padding: 0.2rem;
}
.item-children {
  color: #666;
}
</style>


